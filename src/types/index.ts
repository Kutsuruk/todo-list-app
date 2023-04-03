export type Todo = {
    id: string,
    name: string,
    description: string,
    checked: boolean,
}

export type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
    onCheckTodo: (id: Todo['id']) => void,
    onEdit: (id: string) => void,
    editTodoId: string,
    changeTodoItem: ({ name, description } : Omit<Todo, 'id' | 'checked'>) => void,
}

export type TodoItemProps = {
    todo: Todo,
    onDeleteTodo: (id: Todo['id']) => void,
    onCheckTodo: (id: Todo['id']) => void,
    onEdit: (id: string) => void,
}

export type EditTodoItemProps = {
    todo: Todo,
    onEditTodo: ({ name, description } : Omit<Todo, 'id' | 'checked'>) => void,
}

export type PanelProps = {
    onAddTodo: ({ name, description } : Omit<Todo, 'id' | 'checked'>) => void,
}