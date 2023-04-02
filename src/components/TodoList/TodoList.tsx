import {Box} from "@mui/material";

const todoLists = [
    { id: 1, name: 'Test name', description: 'Test Test Test', checked: false },
    { id: 2, name: 'Test name', description: 'Test Test', checked: true },
    { id: 3, name: 'Test name', description: 'Test', checked: false },
    { id: 4, name: 'Test name', description: 'Test Test Test Test Test', checked: true },
]

const TodoList = () => {
    return(
        <Box>
            {
                todoLists.map((todoList) => (
                    <Box key={todoList.id}>
                        {todoList.description}
                    </Box>
                ))
            }
        </Box>
    )
}

export default TodoList