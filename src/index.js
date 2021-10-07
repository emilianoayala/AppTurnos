import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Home } from './Home';
import './index.css';
import { MainApp } from './MainApp';
import  AppRouter from './Routers/AppRouter';



ReactDOM.render(

    <AppRouter/>,
  document.getElementById('root')
);


