import React from 'react'
import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

//Require List style
require('./style.sass');

// List Component
class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      columns: [
        { key: 'id',
          name: 'ID',
          width: 80,
          sortable: true,
          filterable: true
        },
        {
          key: 'title',
          name: 'Title',
          sortable: true,
          filterable: true
        }
      ],
      filters: {},
      details: null
    }
  }
  
  // This function need to receive arrays of the same length
  // Return a object that represent a row
  createRow = (columns, data_array) => {

    let row = {};

    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = data_array[i];
    }

    return row;
  };

  // Return all rows
  getRows = () => Selectors.getRows(this.state);

  // Return the amount rows
  getSize = () => this.getRows().length;

  // Return a specific row
  rowGetter = (rowIdx) => {
    let rows =  this.getRows();
    return rows[rowIdx];
  };

  // Sort all rows according to the direction.
  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.rows.slice(0) : this.state.rows.sort(comparer);

    this.setState({ rows });
  };

  // Maniputale the current filter
  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({ filters: newFilters });
  };

  // Remove all filters
  onClearFilters = () => {
    this.setState({filters: {} });
  };

  onRowClick = (rowIdx, row) => {
    if(row){
      this.setState({
        details: row.body
      });
    }
  };

  renderDetails = (details) => {
    if(details !== null) {
      return(
        <div id="details">
          <h2>Details: {this.state.details}</h2>
        </div>
      )
    } else {
      return <h1>Select a line to see the details.</h1>
    }
  };

  render() {
    //console.log(this.props)
    if(this.props.isFetching) {
      return(
        <div>
          <div className="row buttons">
            <div className="col-lg-6">

            </div>
          </div>
          <Loading/>
        </div>
      );
    } else {
      return (
        <div id="list">
          <ReactDataGrid
            columns={this.state.columns}
            rowGetter={this.rowGetter}
            enableCellSelect={true}
            rowsCount={this.getSize()}
            maxHeight={((this.state.rows.length + 1) * 25) + 3}
            toolbar={<Toolbar id="filter-button" enableFilter={true}/>}
            onAddFilter={this.handleFilterChange}
            onClearFilters={this.onClearFilters}
            onGridSort={this.handleGridSort}
            enableRowSelect='single'
            onRowClick={this.onRowClick}
            rowSelection={{
            showCheckbox: false,
               selectBy: {
                   isSelectedKey: 'isSelected'
               }
            }}
          />
          {this.renderDetails(this.state.details)}
        </div>
      );
    }
  }
}
export default List;
