import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import App from './container/App';
import Info from './component/Info';
import Details from './component/Details';

import './style/App.scss';
import './style/index.css';


const style_link = {
  textDecoration: "none",
  color: 'white'
};

ReactDOM.render(
  <BrowserRouter>
    <div className='navigation'>
      <li><Link style={style_link} to="/">Pokedex</Link></li>
      <li><Link style={style_link} to="/info">Info</Link></li>
    </div>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/pokemon/:value' element={<Details/>}></Route>
      <Route path='/info' element={<Info/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
