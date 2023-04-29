"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTodoForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  async function postTodoItem(title: string, description: string) {
    const res = await fetch(`/api/todos/createTodo`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      next: { revalidate: 1 },
    });
    if (!res.ok) {
    } else {
      setTitle("");
      setDesc("");
    }
    router.refresh();
  }

  return (
    <div className="relative mb-4">
      <div className="mr-6">
        <input
          type="text"
          placeholder="Add a ToDo's title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <input
          type="text"
          placeholder="Add a ToDo's description"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <button
        onClick={() => postTodoItem(title, desc)}
        className="p-1 py-7 absolute top-0 right-0 rounded-md bg-slate-100 text-green-500 text-xl hover:bg-green-500 hover:text-slate-100 transition-all"
      >
        +
      </button>
    </div>
  );
}
