import { useState } from "react";
import styled from "styled-components";

const ToDoInputContainer = styled.div`
  position: relative;
  display: flex;
  padding: 15px;
`;

const ToDoInputText = styled.input`
  width: 85%;
  height: 35px;
  padding: 5px;
  box-sizing: border-box;
  border: 2px solid #d8d8d8;
  border-right: none;
  border-radius: 5px 0 0 5px;
  color: #6e6e6e;

  &:focus {
    outline: none;
  }
`;

const ToDoInputBtn = styled.button`
  width: 15%;
  height: 35px;
  box-sizing: border-box;
  border: 2px solid #d8d8d8;
  border-radius: 0 5px 5px 0;
  color: #6e6e6e;
  font-size: 20px;
`;
interface ToDoInputProps {
  handleAddTodo: (title: string) => void;
}
export default function ToDoInput({ handleAddTodo }: ToDoInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim() === "") return;
    handleAddTodo(inputValue);
    setInputValue("");
  };
  return (
    <ToDoInputContainer>
      <ToDoInputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력해주세요"
      />
      <ToDoInputBtn onClick={handleAddClick}>+</ToDoInputBtn>
    </ToDoInputContainer>
  );
}
