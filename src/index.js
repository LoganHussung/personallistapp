import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

let toDos = JSON.parse(localStorage.getItem('toDos'));
if (!toDos || toDos.length === 0) {
  toDos = [
    'Go to Class',
    'Learn Stuff',
    'Get a Job'
  ];
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

ReactDOM.render(
  <App toDos={toDos} />,
  document.getElementById('root')
);
