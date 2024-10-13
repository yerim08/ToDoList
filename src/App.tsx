import styled from "styled-components";
import ToDoInput from "./components/ToDoInput";
import ToDoItemList from "./components/ToDoItemList";
import { useGetTodos } from "./hooks/useGetTodos";
import { useEffect, useState } from "react";
import { ToDo } from "./types/toDoTypes";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbeff2;
`;

const ToDoContainer = styled.div`
  width: 400px;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
`;

const ToDoHeader = styled.div`
  color: #585858;
  font-size: 20px;
  font-weight: 600;
  padding: 20px;
  text-align: center;
`;

function App() {
  const { todos: getTodos } = useGetTodos();
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos(getTodos);
    }
  }, [getTodos]);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = (title: string) => {
    const maxId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
    const newTodo = {
      userId: 1,
      id: maxId + 1,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleCompleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <ToDoContainer>
        <ToDoHeader>To Do List</ToDoHeader>
        <ToDoInput handleAddTodo={handleAddTodo} />
        <ToDoItemList
          todos={todos}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </ToDoContainer>
    </Container>
  );
}

export default App;
