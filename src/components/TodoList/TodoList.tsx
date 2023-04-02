import {Box} from "@mui/material";
import TodoItem from "./TodoItem/TodoItem";
import {FC} from "react";
import {TodoListProps} from "../../types";

const TodoList:FC<TodoListProps> = ({ todoLists, onDeleteTodo }) => {
    return(
        <Box>
            {
                todoLists.map((todoList) => (
                    <TodoItem key={todoList.id}
                              todo={todoList}
                              onDeleteTodo={onDeleteTodo}
                    />
                ))
            }
        </Box>
    )
}

export default TodoList