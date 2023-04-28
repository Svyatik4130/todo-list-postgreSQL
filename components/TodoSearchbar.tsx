"use client";

import { TodoItem } from "@/types/todoItem";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  initData: TodoItem[];
  setTodoItems: Dispatch<SetStateAction<TodoItem[]>>;
};

export default function TodoSearchbar({ initData, setTodoItems }: Props) {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (input.length > 0) {
      const foundTodos = initData.filter((todo) => {
        return todo.title.toLowerCase().includes(input.toLowerCase());
      });
      setTodoItems(foundTodos);
    } else {
      setTodoItems(initData);
    }
  }, [input]);

  return (
    <div>
      <input type="text" placeholder="Search for a ToDo" onChange={(e) => setInput(e.target.value)} value={input} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
    </div>
  );
}
