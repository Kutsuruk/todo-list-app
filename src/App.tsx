import React, {FC, useState} from 'react';
import './App.css';
import {Todo} from "./types";
import {Box} from "@mui/material";

import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import TodoList from "./components/TodoList/TodoList";

const  App:FC = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, name: 'Test name', description: 'Test Test Test', checked: false },
        { id: 2, name: 'Test name', description: 'Test Test', checked: true },
        { id: 3, name: 'Test name', description: 'Test', checked: false },
        { id: 4, name: 'Test name', description: 'Test Test Test Test Test', checked: true },
    ])

    const onAddTodo = (todo: Todo) => {
    }

    const onDeleteTodo = (id: Todo['id']): void => {
        setTodoList(todoList.filter((todo) => {
            return todo.id !== id
        }))
    }

  return (
      <div className='App'>
          <Box display='flex' flexDirection='column' width='550px'>
              <Header />
              <Panel />
              <TodoList onDeleteTodo={onDeleteTodo}
                        todoLists={todoList}
              />
          </Box>
      </div>
  );
}

export default App;
