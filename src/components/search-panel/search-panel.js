import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this._onSearchChange = (evt) => {
      const term = evt.target.value;

      this.setState({term});
      props.onSearchChange(term);
    }
  }

  render() {
    const {term} = this.state;

    return (
      <input
        className="form-control search-input"
        placeholder="type to search"
        onChange={this._onSearchChange}
        value={term}
      />
    );
  }
};
