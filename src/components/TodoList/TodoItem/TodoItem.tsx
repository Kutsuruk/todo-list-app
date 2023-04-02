import React, {FC, useState} from "react";
import {Box, Checkbox, IconButton, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type TodoItemProps = {
    todo: {
        id: number,
        name: string,
        description: string,
        checked: boolean
    },
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return(
        <Paper elevation={3}
               style={{
                   padding: '20px 20px',
                   marginTop: '15px',
                   borderRadius: '2',
                   display: 'flex',
                   justifyContent: 'space-between',
                   alignContent: 'center',
                   gap: '2',
                   width: '100%',
               }}
        >
            <Box textAlign='left'>
                <Typography style={{ textDecoration: todo.checked ? "line-through" : 'none' }}
                            fontSize='25px'
                            variant='h3'
                >
                    {todo.name}
                </Typography>
                <Typography fontSize='15px'
                            variant='subtitle1'
                >
                    {todo.description}
                </Typography>
            </Box>
            <Box>
                <Checkbox defaultChecked={todo.checked} />
                <IconButton color='error' aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Paper>
    )
}

export default TodoItem