import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/users?userEmail=example@teste.com

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userEmail, userId } = req.query

  if (userEmail) {
    const userByEmail = await prisma.user.findUnique({
      where: {
        email: String(userEmail),
      },
    })

    return res.json({ user: userByEmail })
  }

  if (userId) {
    const userById = await prisma.user.findUnique({
      where: {
        id: String(userId),
      },
    })

    return res.json({ user: userById })
  }

  return res.status(400).json({ error: 'Invalid parameters' })
}
