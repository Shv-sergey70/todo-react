import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'active', label: 'Active'},
      {name: 'done', label: 'Done'}
    ];
  };

  render() {
    const {selectedFilter, onFilterChange} = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = selectedFilter === name;
      return (
        <button type="button"
                className={`btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`}
                onClick={() => onFilterChange(name)}
                key={name} >{label}</button>
      )
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};
