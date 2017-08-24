import React from 'react';

class OrderStatus extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { orderStatus } = this.props;
    return (
      <div className="center_content_bottom detail_bot">
        <div className="center_content_inner">
          <div className="center_content_inner_head"><h5 style={{ fontWeight: '300' }}>Offering Completed</h5></div>
          <div className="center_content_inner_val"><h3 style={{ fontWeight: '300' }}>{orderStatus.offering_completed}</h3></div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head"><h5 style={{ fontWeight: '300' }}>Dollar Amount Allocated</h5></div>
          <div className="center_content_inner_val"><h3 style={{ fontWeight: '300' }}>${orderStatus.dollar_amount_allocated}</h3></div>
        </div>
      </div>
    );
  }
}

OrderStatus.propTypes = {
  orderStatus: React.PropTypes.any,
};

export default OrderStatus;
