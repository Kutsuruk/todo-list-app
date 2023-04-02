export type Todo = {
    id: number,
    name: string,
    description: string,
    checked: boolean
}

export type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
}

export type TodoItemProps = {
    todo: Todo,
    onDeleteTodo: (id: Todo['id']) => void,
}