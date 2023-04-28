import { default as getFullList } from "@/pages/api/todos";
import { default as getSingleTodo } from "@/pages/api/todos/[todoId]";
import { todoList } from "@/data/todoListData";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { createRequest, createResponse, RequestOptions } from "node-mocks-http";

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;

export const testHandler = async (
  handler: NextApiHandler,
  options: RequestOptions
) => {
  const req = createRequest<ApiRequest>(options);
  const res = createResponse<APiResponse>();

  await handler(req, res);
  return res;
};

describe("api tests", () => {
  it("should return TodoItems", async () => {
    const res = await testHandler(getFullList, { method: "GET" });

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ "content-type": "application/json" });
    expect(res.statusMessage).toEqual("OK");
    expect(res._getJSONData()).toEqual(todoList);
  });

  it("should return a single TodoItem", async () => {
    const todoId = "1";
    const res = await testHandler(getSingleTodo, {
      method: "GET",
      query: { todoId },
    });

    const expectedItem = todoList.filter((item) => item.id === Number(todoId))[0];
    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ "content-type": "application/json" });
    expect(res.statusMessage).toEqual("OK");
    expect(res._getJSONData()).toEqual(expectedItem);
  });
});
