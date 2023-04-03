import {Box} from "@mui/material";
import TodoItem from "./TodoItem/TodoItem";
import {FC} from "react";
import {TodoListProps} from "../../types";
import EditTodoItem from "./EditTodoItem/EditTodoItem";

const TodoList:FC<TodoListProps> = ({ todoLists, onDeleteTodo, onCheckTodo, onEdit, editTodoId, changeTodoItem }) => {
    return(
        <Box>
            {
                todoLists.map((todoList) => {
                    if (todoList.id === editTodoId)
                        return (
                            <EditTodoItem key={todoList.id}
                                          todo={todoList}
                                          onEditTodo={changeTodoItem}
                            />
                        )
                    else {
                         return (
                            <TodoItem key={todoList.id}
                                      todo={todoList}
                                      onDeleteTodo={onDeleteTodo}
                                      onCheckTodo={onCheckTodo}
                                      onEdit={onEdit}
                            />
                        )
                    }
                })}
        </Box>
    )
}

export default TodoList