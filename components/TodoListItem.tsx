"use client";

import Link from "next/link";

type Props = {
  id: number;
  title: string;
};

export default function TodoListItem({ id, title }: Props): JSX.Element {
  return (
    <div key={id} className="m-4 flex">
      <p>•</p>
      <Link
        data-testid={`todo-${id}`}
        className="text-blue-500 hover:text-blue-700 transition-all"
        href={{ pathname: `/todos/${id}` }}
      >
        {title}
      </Link>
    </div>
  );
}
