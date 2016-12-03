import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

let toDos = JSON.parse(localStorage.getItem('toDos'));
if (!toDos || toDos.length === 0) {
  toDos = [
    {text: 'Here are ',
    completed: false
  },
    {text: 'some simple',
    completed: false

  },
    {text: 'task examples.',
    completed: false
  }
  ];
}

ReactDOM.render(
  <App toDos={toDos} />,
  document.getElementById('root')
);
