import React from 'react'
import ReactDataGrid from 'react-data-grid';

//Require List style
require('./style.sass');

// List Component
class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      columns: [
        { key: 'title', name: 'Title' }
      ]
    }
  }

  // Return a specific row
  rowGetter = (rowIdx) => {
    let rows =  this.state.rows;
    return rows[rowIdx];
  };

  render() {
    return (
      <div id="list">
        <ReactDataGrid
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          maxHeight={((this.state.rows.length + 1) * 5) + 3}
        />
      </div>
    );
  }
}

export default List
