import prisma from '@/prisma/client';
import { TodoItem } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const todo: TodoItem = JSON.parse(req.body);
    if (req.method === "POST") {
      if (!todo.title.length || !todo.description.length) {
        return res.status(500).json({ message: "Please fill all the inputs" });
      }
      const data = await prisma.todoItem.create({
        data: {
          title: todo.title,
          description: todo.description,
        },
      });
      return res.status(200).json(data);
    } else {
      return res.status(500).json({ message: "Method is not supported" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
