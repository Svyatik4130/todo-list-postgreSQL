import TodosAggregator from "@/components/TodosAggregator";
import AddTodoForm from "./AddTodoForm";
import { TodoItem } from "@prisma/client";

export default async function Home() {
  const data: TodoItem[] = await GetTodoList();

  async function GetTodoList() {
    const res = await fetch(`${process.env.BASE_URL}/api/todos`, {next: {revalidate: 1}});
    if (!res.ok) console.log(res);
    return res.json();
  }

  return (
    <div className="overflow-scroll">
      <h1 className="font-bold text-4xl mb-4">Leo's ToDo List</h1>
      <AddTodoForm />
      <TodosAggregator data={data}/>
    </div>
  );
}
