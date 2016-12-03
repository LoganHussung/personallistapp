import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDos: this.props.toDos,
      newItemValue: ''
    }
  }
  whenSubmit (e){
    e.preventDefault();
    console.log(this.state.newItemValue);
    var newToDo = this.state.toDos.concat([{
      text: this.state.newItemValue,
      completed: false
    }]);
    this.setState({
      toDos: newToDo,
      newItemValue: ''
    });
    localStorage.setItem('toDos', JSON.stringify(newToDo));
  }


  whenClicked (index, e){
    var head = this.state.toDos.slice(0,index)
    var tail = this.state.toDos.slice(index +1, this.state.toDos.length)
    var newToDo = head.concat(tail)
    this.setState({
      toDos: newToDo
    });
    localStorage.setItem('toDos', JSON.stringify(newToDo));
  }

  whenCheckedClicked(index, e){
    let newItems = this.state.toDos.slice(0);
    newItems[index].completed = !newItems[index].completed;
    this.setState({
      toDos: newItems
    })
    localStorage.setItem('toDos', JSON.stringify(newItems));
  }

  whenChanged (e){
    this.setState({
      newItemValue: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="header_text">
            <h3>ToDo</h3>
            <h5>Time to get to work</h5>
          </div>
        </div>
        <form onSubmit={this.whenSubmit.bind(this)}>
          <input type="text" onChange={this.whenChanged.bind(this)} value={this.state.newItemValue} placeholder="New Task Here"  />
          <button>Add New Task </button>
        </form>
        <ul className="allTasks">
          <p> Welcome to ToDo. To add a task enter it in the field above. After you have completed your task, simply click on the trash to remove from your list. </p>
          <div className="number"> {this.state.toDos.length} </div>
          {this.state.toDos.map((todo, index)=> {
            return(
              <li className="item_text" key={index} >
                <span onClick={this.whenCheckedClicked.bind(this, index)}style={{textDecoration: todo.completed ? 'line-through' : 'none'}} >{todo.text}</span>
                <i className="ion-ios-trash-outline" onClick={this.whenClicked.bind(this, index)} />
              </li>
            )
          }
        )
        }
        </ul>
      </div>
    );
  }
}

export default App;
