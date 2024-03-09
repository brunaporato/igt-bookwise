import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth].api'
import * as zod from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  try {
    const bookId = String(req.query.bookId)
    const userEmail = String(session?.user?.email)
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    })

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      })
    }

    const userId = user.id

    const bodySchema = zod.object({
      description: zod.string().max(450),
      rate: zod.number().min(1).max(5),
    })

    const { description, rate } = bodySchema.parse(req.body)

    const userAlreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    })

    if (userAlreadyRated) {
      return res.status(400).json({
        error: 'User already rated this book',
      })
    }

    await prisma.rating.create({
      data: {
        book_id: bookId,
        description,
        rate,
        user_id: userId,
      },
    })

    return res.json(201)
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
