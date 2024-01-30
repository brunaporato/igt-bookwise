import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/users?userEmail=example@teste.com

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userEmail = String(req.query.userEmail)

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  })

  return res.json({ user })
}