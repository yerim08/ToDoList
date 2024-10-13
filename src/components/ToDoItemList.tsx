import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { ToDo } from "../types/toDoTypes";

const ToDoItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 8px;
`;

interface ToDoItemListProps {
  todos: ToDo[];
  handleCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function ToDoItemList({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
}: ToDoItemListProps) {
  return (
    <ToDoItemListContainer>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ToDoItemListContainer>
  );
}
