import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

let toDos = JSON.parse(localStorage.getItem('toDos'));
if (!toDos || toDos.length === 0) {
  toDos = [
    {text: 'Go to Class',
    completed: false
  },
    {text: 'Learn some stuff',
    completed: false

  },
    {text: 'Get a freaking job',
    completed: false
  }
  ];
}

ReactDOM.render(
  <App toDos={toDos} />,
  document.getElementById('root')
);
