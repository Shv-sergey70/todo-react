import React, {Component} from "react";
import './todo-list-item.css'

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = () => {
      this.setState({
        done: true
      });
    };

    this.onMarkImportant = () => {
      this.setState({
        important: true
      });
    };
  }

  render() {
    const {label} = this.props;
    const {done, important} = this.state;

    return (
      <span className={`todo-list-item ${done ? 'done' : ''} ${important ? 'important' : ''}`}>
      <span
        className="todo-list-item-label"
        onClick={this.onLabelClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    )
  }
}

export default TodoListItem;
