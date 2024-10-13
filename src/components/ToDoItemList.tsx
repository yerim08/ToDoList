import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { ToDo } from "../types/toDoTypes";

const ToDoItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 0 15px;
  gap: 8px;
  flex-grow: 1;
  overflow-y: auto;
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
      {todos
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
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
