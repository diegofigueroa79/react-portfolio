import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router} from "react-router-dom"
import 'antd/dist/antd.css';
import CustomLayout from './components/layout/CustomLayout'
import BaseRouter from './routes'


function App() {
  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
}

export default App;
