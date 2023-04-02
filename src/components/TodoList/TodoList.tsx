import {Box} from "@mui/material";
import TodoItem from "./TodoItem/TodoItem";
import {FC} from "react";
import {Todo} from "../../types";

type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
}
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