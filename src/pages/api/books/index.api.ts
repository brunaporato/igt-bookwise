import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/books?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookId = String(req.query.bookId)
  console.log('bookId:', bookId)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  return res.json({ book })
}
