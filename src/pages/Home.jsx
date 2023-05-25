import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]); // muda o estado da lista de tarefas

  const addTodo = (todo) => { // Adiciona um novo item na minha lista atravez do setTodos
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id); // deleta um item na minha lista
    setTodos(filtered);
  };

  const editTodo = (id, newTodo) => {
    var todosArray = [...todos] // Spread Operator permite copiar todos os atributos de um array ou obj pra um novo obj

    for (var i in todosArray){
      if (todosArray[i].id == id){
        todosArray[i].text = newTodo
      }
    }
    
    setTodos(todosArray); // setas de novo na lista de tarefas
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>  
      <Form addTodo={addTodo}></Form> 
      <List sx={{ marginTop: "1em" }}> 
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
