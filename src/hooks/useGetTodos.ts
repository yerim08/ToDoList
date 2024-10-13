import { useEffect, useState } from "react";
import axios from "axios";

export function useGetTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return { todos };
}
