import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class SortableTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  handleClick = (value) => {
    console.log(value);
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          loadingText="Loading..."
          noDataText="No data found"
          columns={[

            {
              Header: 'Broker Dealer',
            },
            {
              Header: 'Offerings',
              accessor: 'lastName',
            },
            {
              Header: 'Number of Investors',
              accessor: 'age',
            },
            {
              Header: 'Number of Orders',
            },
            {
              Header: 'Dollar Amount in Offerings',
            },
            {
              Header: 'Share Ordered',
            },
            {
              Header: 'Share Allocated',
            },
          ]}
          defaultSorted={[
            {
              id: 'firstName',
              desc: false,
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          headerStyle={{ height: '100px' }}
        />
        <br />
      </div>
    );
  }
}

export default SortableTable;
