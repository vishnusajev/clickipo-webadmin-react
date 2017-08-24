import React from 'react';
import ScreenCenter from 'components/ScreenCenter';

class OrderList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { orders } = this.props;
    if (orders && orders.length > 0) {
      return (
        <div className="center_content_bottom_investors detail_bot">
          {
            orders.map((item, i) => (
              <div className="detail_rows" key={i}>
                <div className="top_left">
                  <div className="detail_inner_wrapper">
                    <div className="company inline title">Company :</div>
                    <div className="company inline blue bold">Pixar</div>
                  </div>
                  <div className="detail_inner_wrapper">
                    <div className="company inline title">Date :</div>
                    <div className="company inline bold">{item.created_at}</div>
                  </div>
                  <div className="detail_inner_wrapper">
                    <div className="company inline title">Status :</div>
                    <div className="company inline bold">{item.status}</div>
                  </div>
                </div>
                <div className="top_right">
                  <div className="colomn_top">
                    <div className="detail_colomn inline"></div>
                    <div className="detail_colomn inline ">Amount</div>
                    <div className="detail_colomn inline ">Shares</div>
                  </div>

                  <div className="colomn_bottom">
                    <div className="detail_colomn inline fade">Order :</div>
                    <div className="detail_colomn inline bold">${item.allocated_amount}</div>
                    <div className="detail_colomn inline bold">{item.allocated_shares}</div>
                  </div>
                </div>
                <div className="clear_both"></div>
              </div>
            ))
          }
        </div>
      );
    }
    return (
      <div style={{ minHeight: '189px', position: 'relative' }}>
        <ScreenCenter>
          No orders found
        </ScreenCenter>
      </div>
    );
  }
}

OrderList.propTypes = {
  orders: React.PropTypes.any,
};

export default OrderList;
