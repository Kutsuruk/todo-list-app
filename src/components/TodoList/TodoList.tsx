import {Box} from "@mui/material";
import TodoItem from "./TodoItem/TodoItem";
import {FC} from "react";
import {TodoListProps} from "../../types";

const TodoList:FC<TodoListProps> = ({ todoLists, onDeleteTodo, onCheckTodo }) => {
    return(
        <Box>
            {
                todoLists.map((todoList) => (
                    <TodoItem key={todoList.id}
                              todo={todoList}
                              onDeleteTodo={onDeleteTodo}
                              onCheckTodo={onCheckTodo}
                    />
                ))
            }
        </Box>
    )
}

export default TodoList