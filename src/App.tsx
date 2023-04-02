import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import {Box} from "@mui/material";
import TodoList from "./components/TodoList/TodoList";

const  App:FC = () => {
  return (
      <div className='App'>
          <Box display='flex' flexDirection='column' width='550px'>
              <Header />
              <Panel />
              <TodoList />
          </Box>
      </div>
  );
}

export default App;
