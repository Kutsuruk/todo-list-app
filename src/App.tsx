import React, {FC, useState} from 'react';
import './App.css';
import {Todo} from "./types";
import {Box} from "@mui/material";

import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import TodoList from "./components/TodoList/TodoList";
import {nanoid} from "nanoid";

const  App:FC = () => {
    const [todoList, setTodoList] = useState([
        { id: nanoid(), name: 'Test name', description: 'Test Test Test', checked: false },
        { id: nanoid(), name: 'Test name', description: 'Test Test', checked: true },
        { id: nanoid(), name: 'Test name', description: 'Test', checked: false },
        { id: nanoid(), name: 'Test name', description: 'Test Test Test Test Test', checked: true },
    ])
    const [editTodoId, setEditTodoId] = useState<string>('')

    console.log(editTodoId)
    const onAddTodo = ({ name, description } : Omit<Todo, 'id' | 'checked'>) => {
        setTodoList([...todoList, {id: nanoid(), description, name, checked: false}])
    }

    const onDeleteTodo = (id: Todo['id']): void => {
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }

    const onCheckTodo = (id: Todo['id']): void => {
        setTodoList(todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }

            return todo
        }))
    }

    const onEdit = (id: string) => {
        setEditTodoId(id)
    }

    const changeTodoItem = ({ name, description }: Omit<Todo, 'id' | 'checked'>): void => {
        setTodoList(todoList.map((todo) => {
            if (todo.id === editTodoId) {
                return { ...todo, name, description }
            }

            return todo
        }))

        setEditTodoId('')
    }

  return (
      <div className='App'>
          <Box display='flex' flexDirection='column' width='550px'>
              <Header />
              <Panel onAddTodo={onAddTodo} />
              <TodoList onDeleteTodo={onDeleteTodo}
                        todoLists={todoList}
                        onCheckTodo={onCheckTodo}
                        onEdit={onEdit}
                        editTodoId={editTodoId}
                        changeTodoItem={changeTodoItem}
              />
          </Box>
      </div>
  );
}

export default App;
