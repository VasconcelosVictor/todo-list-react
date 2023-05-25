import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function EditDilog({open, dialogHandler, todo, editTodo}) {
    const [editedText, setEditedText] = useState(todo.text)
    
    const textHandler = () => { // edita o texto da lista
        editTodo(todo.id, editedText)
        dialogHandler(true)
    }


  return (
      <Dialog
      open={open} 
        onClose={dialogHandler} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Editando Tarefa"}
        </DialogTitle>
        <DialogContent>
          <TextField defaultValue={editedText} fullWidth onChange={ (e) =>setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler} >Cancelar</Button>
          <Button  autoFocus onClick={textHandler}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>

  );
}
