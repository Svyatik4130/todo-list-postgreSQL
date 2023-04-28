"use client";

import { useState } from "react";

import TodoListItem from "./TodoListItem";
import TodoSearchbar from "./TodoSearchbar";

import { TodoItem } from "@prisma/client";

type Props = {
  data: TodoItem[];
};

export default function TodosAggregator({ data }: Props): JSX.Element {
  const [todoItems, setTodoItems] = useState(data);

  return (
    <div>
      <TodoSearchbar initData={data} setTodoItems={setTodoItems} />
      {todoItems.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
}
