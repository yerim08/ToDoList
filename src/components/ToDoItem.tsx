import styled from "styled-components";
import { ToDo } from "../types/toDoTypes";

const ToDoItemContainer = styled.div`
  display: flex;
  min-height: 42px;
  gap: 10px;
  align-items: center;
`;

const ToDoCheckBox = styled.input`
  width: 16px;
  height: 16px;
  &:checked {
    border-color: transparent;
    background-size: 10px 7px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #cecece;
  }
`;

const ToDoText = styled.div<{ completed: boolean }>`
  flex: 1;
  font-size: 12px;
  text-align: left;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#a9a9a9" : "#000000")};
`;

const ToDoDeleteBtn = styled.button`
  width: 30px;
  border: 2px solid #d8d8d8;
  border-radius: 5px;
  color: #6e6e6e;
  font-size: 20px;
`;

interface ToDoItemProps {
  todo: ToDo;
  handleCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function ToDoItem({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
}: ToDoItemProps) {
  return (
    <ToDoItemContainer>
      <ToDoCheckBox
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCompleteTodo(todo.id)}
      />
      <ToDoText completed={todo.completed}>{todo.title}</ToDoText>
      <ToDoDeleteBtn onClick={() => handleDeleteTodo(todo.id)}>-</ToDoDeleteBtn>
    </ToDoItemContainer>
  );
}
