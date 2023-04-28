"use client";

import Link from "next/link";

type Props = {
  title: string;
  description: string;
};

export default function TodoItem({ title, description }: Props) {
  return (
    <div>
      <Link href="/">
        <p className="text-xl text-blue-500 hover:text-blue-700 transition-all">
          &lt; Back
        </p>
      </Link>
      <h1 className="text-4xl animate-pulse text-center my-6">{title}</h1>
      <div className="w-full rounded-md bg-slate-200 p-4">
        <p>{description}</p>
      </div>
    </div>
  );
}
