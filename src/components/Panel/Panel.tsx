import {Button, Paper, TextField} from "@mui/material";
import React, {FC, useState} from "react";
import {Add} from "@mui/icons-material";
import {PanelProps} from "../../types";
const Panel:FC<PanelProps> = ({ onAddTodo }) => {
    const [todo, setTodo] = useState({ name: '', description: ''})

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name} = event.target
        setTodo({...todo, [name]: value} )
    }

    const onClick = (): void => {
        onAddTodo(todo)
        setTodo({ name: '', description: '' })
    }

    return(
        <Paper elevation={3}
               className='panelPaper'
        >
            <TextField id="outlined-basic"
                       label="Name"
                       variant="outlined"
                       name='name'
                       onChange={onInputChange}
                       value={todo['name']}
            />
            <TextField id="outlined-basic"
                       label="Description"
                       variant="outlined"
                       name='description'
                       onChange={onInputChange}
                       value={todo['description']}
            />

            <Button variant="contained"
                    startIcon={<Add />}
                    onClick={onClick}
            >
                Add
            </Button>
        </Paper>
    )
}

export default Panel