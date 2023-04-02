import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import {Box} from "@mui/material";

const  App:FC = () => {
  return (
      <div className='App'>
          <Box display='flex' flexDirection='column'>
              <Header />
              <Panel />
          </Box>
      </div>
  );
}

export default App;
