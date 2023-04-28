import TodoItem from "@/components/TodoItem";
import { TodoItem as TodoItemType } from "@/types/todoItem";

async function getTodoItem(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/todos/${id}`);
  if (!res.ok) console.log(res);
  return res.json();
}

type Props = {
    params: {
        id: string;
    }
}

export default async function Item({params: {id}}: Props) {
  const data: TodoItemType = await getTodoItem(id);

  return <TodoItem title={data.title} description={data.description} />;
}
