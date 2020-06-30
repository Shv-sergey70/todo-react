import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddFrom from '../item-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.maxId = 100;

    this.state = {
      todoData: [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
      ]
    };

    this.deleteItem = (id) => {
      this.setState(({todoData}) => ({
        todoData: todoData.filter((todo) => todo.id !== id)
      }))
    };

    this.addItem = (text) => {
      const newItem = {
        label: text,
        important: false,
        id: this.maxId++
      };

      this.setState(({todoData}) => ({
        todoData: [...todoData, newItem]
      }));
    }
  }
  render() {
    const {todoData} = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
        />

        <ItemAddFrom
          onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;
