import React, {FC} from "react";
import {Box, Checkbox, IconButton, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {TodoItemProps} from "../../../types";

const TodoItem: FC<TodoItemProps> = ({ todo, onDeleteTodo , onCheckTodo, onEdit }) => {
    const onCheck = (): void => {
        onCheckTodo(todo.id)
    }

    const onEditItem = (): void => {
        onEdit(todo.id)
    }

    return(
        <Paper elevation={3}
               className='todoItemPaper'
               style={{opacity: todo.checked ? 0.5 : 1}}
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
                <Checkbox onChange={onCheck}
                          defaultChecked={todo.checked}
                />

                <IconButton aria-label='edit'
                            color='primary'
                            onClick={onEditItem}
                >
                    <EditIcon />
                </IconButton>

                <IconButton color='error'
                            aria-label="delete"
                            onClick={() => onDeleteTodo(todo.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Paper>
    )
}

export default TodoItem