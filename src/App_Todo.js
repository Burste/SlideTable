import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Todos/Title';
import CreateTodo from './Components/Todos/CreateTodo';
import TodoList from './Components/Todos/TodoList';
class App extends Component {
  constructor() {
    super();
    //let todos=['Buy soymilk','transfer $$','get checkresult'];
    let todoItems = [
      { item: 'Buy soymilk', date: "2018/07/16", isDone: true },
      { item: 'Go to workout', date: "2018/07/17", isDone: false },
      { item: 'Design menu', date: "2018/07/17", isDone: false }];
    
      // let bannerProp={
    //   openAtStart:false,
    //   transition:false,
    //   state:{
    //     open:{class:'opened',text:'OPEN'},
    //     close:{class:'closed',text:'CLOSE'}      
    //   }
    // };
    this.state = {
      name: '待辦事項',
      todos: todoItems
    }
  }
  createTodo(newtodo) {
    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React App</h1>
        </header>
        <div className="container">
          <Title todos={this.state.todos} />
          <CreateTodo data={this.state}
            createTodo={(newtodo) => this.createTodo(newtodo)} />
          <TodoList todos={this.state.todos} />
        </div>
        
      </div>
    )
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    */
  }
}

export default App;
