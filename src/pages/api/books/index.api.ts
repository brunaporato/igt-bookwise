import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/books

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const books = await prisma.book.findMany()

  return res.json({ books })
}
