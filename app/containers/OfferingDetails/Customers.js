import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { parseDate } from 'containers/Offerings/Helpers';

class CustomerTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    const { customers } = this.props;
    return (
      <div>
        <ReactTable
          data={customers}
          loadingText="Loading..."
          noDataText="No data found"
          columns={[

            {
              Header: 'Customers',
              id: 'user_name',
              accessor: (d) => (<a href={`investor-detail?id=${d.user_id}`}>{d.user_name}</a>),

            },
            {
              Header: 'Order Size',
              accessor: 'orders_size',
            },
            {
              Header: 'Order Date',
              id: 'order_date',
              accessor: (d) => parseDate(d.order_date),
            },
            {
              Header: 'Shares Allocated',
              accessor: 'shares_allocated',
              minWidth: 150,
            },
            {
              Header: 'Allocation in Dollars',
              id: 'allocation_in_dollers',
              accessor: (d) => `$${d.allocation_in_dollers}`,
              minWidth: 150,
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

CustomerTable.propTypes = {
  customers: React.PropTypes.any,
};

export default CustomerTable;
