import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDos: ['Update Portfolio','Update Resume','Apply for Jobs','Get Haircut'],
      newItemValue: ''
    }
  }
  whenSubmit (e){
    e.preventDefault();
    console.log(this.state.newItemValue);
    this.setState({
      toDos: this.state.toDos.concat([this.state.newItemValue]),
      newItemValue: ''
    })
  }

  whenClicked (index, e){
    console.log('people', index);
    var head = this.state.toDos.slice(0,index)
    var tail = this.state.toDos.slice(index +1, this.state.toDos)
    this.setState({
      toDos:head.concat(tail)
    })
  }
  whenChanged (e){
    this.setState({
      newItemValue: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>ToDo List</h3>
        <form onSubmit={this.whenSubmit.bind(this)}>
          <input type="text" onChange={this.whenChanged.bind(this)} value={this.state.newItemValue} placeholder="New Tasks Here"  />
          <button>Add New Task </button>
        </form>
        <ul className="allTasks">
          {this.state.toDos.map((todo, index)=> {
            return(
              <li onClick={this.whenClicked.bind(this, index)} key={index}>{todo}</li>
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
