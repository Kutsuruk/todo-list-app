import {Button, Paper, TextField} from "@mui/material";
import React, {FC, useState} from "react";
import {Add} from "@mui/icons-material";
import {PanelProps} from "../../types";

const DEFAULT_TODO = { name: '', description: '' }

const Panel:FC<PanelProps> = ({ onAddTodo }) => {
    const [todo, setTodo] = useState({ name: '', description: ''})

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name} = event.target
        setTodo({...todo, [name]: value} )
    }

    const onClick = () => {
        onAddTodo(todo)
        setTodo({ name: '', description: ''})
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
            />
            <TextField id="outlined-basic"
                       label="Description"
                       variant="outlined"
                       name='description'
                       onChange={onInputChange}
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