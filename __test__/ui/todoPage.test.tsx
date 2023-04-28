import React from "react";
import { fireEvent, getByText, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoListItem from "@/components/TodoListItem";
import TodoItem from "@/components/TodoItem";
import TodosAggregator from "@/components/TodosAggregator";

describe("components tests", () => {
  it("render Todo list item", () => {
    const todoTestId = 111;
    render(<TodoListItem id={todoTestId} title="jest-test" />);

    const { getByText } = within(screen.getByTestId(`todo-${todoTestId}`));
    expect(getByText("jest-test")).toBeInTheDocument();
  });

  it("render Todo item component", () => {
    const info = {
      title: "hello Glen",
      description: "some description",
    };
    render(<TodoItem title={info.title} description={info.description} />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(info.title);

    const description = screen.getByText(info.description);
    expect(description).toBeInTheDocument();
  });

  it("render Aggregator with Searchbar", () => {
    const initData = [
      {
        id: 6,
        title: "test react",
        description: "some description",
      },
      {
        id: 7,
        title: "non react",
        description: "some description1",
      },
    ];
    render(<TodosAggregator data={initData} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "test" } });

    const item = screen.getByText("test react");
    expect(item).toBeInTheDocument();
  });
});
