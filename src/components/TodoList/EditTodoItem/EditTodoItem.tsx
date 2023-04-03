import React, {FC, useState} from "react";
import {Button, Paper, TextField} from "@mui/material";
import {EditTodoItemProps} from "../../../types";
import SaveAsIcon from '@mui/icons-material/SaveAs';
const EditTodoItem: FC<EditTodoItemProps> = ({ todo, onEditTodo }) => {
    const [editTodoList, setEditTodoList] = useState({
        name: todo.name,
        description: todo.description,
    })
    const onClick = (): void => {
        onEditTodo(editTodoList)
    }
    const onChangeTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name} = event.target
        setEditTodoList({...todo, [name]: value} )
    }

    return(
        <Paper elevation={3}
               className='todoItemPaper'
               style={{opacity: todo.checked ? 0.5 : 1}}
        >
            <TextField id="outlined-basic"
                       label="Name"
                       variant="outlined"
                       name='name'
                       onChange={onChangeTodo}
                       value={editTodoList.name}
            />
            <TextField id="outlined-basic"
                       label="Description"
                       variant="outlined"
                       name='description'
                       onChange={onChangeTodo}
                       value={editTodoList.description}
            />

            <Button variant="contained"
                    startIcon={<SaveAsIcon />}
                    onClick={onClick}
            >
                Save
            </Button>
        </Paper>
    )
}

export default EditTodoItem