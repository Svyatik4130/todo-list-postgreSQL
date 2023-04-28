import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { todoId } = req.query

    const data = await prisma.todoItem.findUnique({
      where: {
        id: Number(todoId),
      }
    })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}
