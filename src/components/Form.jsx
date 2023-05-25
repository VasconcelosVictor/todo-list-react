import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

export default function Form({addTodo}) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0)
  const todoCreat = (text) => {
    const todoObject ={
        text: text, id: id
    }
    setId(id+1)
    addTodo(todoObject)
    document.getElementById("outlined-basic").value = null
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ direction: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
        />
        <Button variant="text" onClick={() => todoCreat(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}
