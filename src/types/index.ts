export type Todo = {
    id: string | number,
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

export type PanelProps = {
    onAddTodo: ({ name, description } : Omit<Todo, 'id' | 'checked'>) => void
}