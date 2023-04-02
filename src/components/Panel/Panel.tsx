import {Button, Paper, TextField} from "@mui/material";
import React, {useState} from "react";
import {Add} from "@mui/icons-material";

const DEFAULT_TODO = { name: '', description: '' }

const Panel = () => {
    const [todo, setTodo] = useState({ name: '', description: ''})

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name} = event.target
        setTodo({...todo, [name]: value} )
    }

    const onButtonAddClick = (): void => {
        console.log('@', todo)
        setTodo(DEFAULT_TODO)
    }

    return(
        <Paper elevation={3}
               style={{
                   padding: '35px 20px',
                   borderRadius: '2',
                   display: 'flex',
                   justifyContent: 'space-between',
                   alignContent: 'center',
                   gap: '2',
                   width: '100%',
               }}
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
                    onClick={onButtonAddClick}
            >
                Add
            </Button>
        </Paper>
    )
}

export default Panel