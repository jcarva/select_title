import React from 'react'
import ReactDataGrid from 'react-data-grid';
import Details from './Details'
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
      selectedTitleIndex: null
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
    console.log(rowIdx);
    let rows = this.state.rows;
    rows.map(row => {
      row.isSelected = false;
    });

    rows[rowIdx].isSelected = true;
    this.setState({
      rows,
      selectedTitleIndex: rowIdx
    });
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
            minMax={((this.state.rows.length + 1) * 25) + 3}
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
          <Details id={this.state.selectedTitleIndex}/>
        </div>
      );
    }
  }
}
export default List
