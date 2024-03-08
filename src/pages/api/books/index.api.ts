import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/books

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const categoryId = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId,
        },
      },
    },
    include: {
      ratings: true,
    },
  })

  return res.json({ books })
}
