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
        this._createTodoItem('Drink Coffee'),
        this._createTodoItem('Make Awesome App'),
        this._createTodoItem('Have a lunch')
      ]
    };

    this.deleteItem = (id) => {
      this.setState(({todoData}) => ({
        todoData: todoData.filter((todo) => todo.id !== id)
      }))
    };

    this.addItem = (text) => {
      this.setState(({todoData}) => ({
        todoData: [...todoData, this._createTodoItem(text)]
      }));
    };

    this.onToggleImportant = (id) => {
      this.setState(({todoData}) => ({
        todoData: this._toggleProperty(todoData, id, 'important')
      }));
    };

    this.onToggleDone = (id) => {
      this.setState(({todoData}) => ({
        todoData: this._toggleProperty(todoData, id, 'done')
      }));
    };
  }

  _createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  _toggleProperty(arr, id, propName) {
    const oldItemIndex = arr.findIndex((todo) => todo.id === id);
    const oldItem = arr[oldItemIndex];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, oldItemIndex),
      newItem,
      ...arr.slice(oldItemIndex + 1)
    ];
  }

  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter((todo) => todo.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddFrom
          onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;
