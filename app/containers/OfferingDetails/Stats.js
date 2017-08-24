import React from 'react';

class Stats extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { stats } = this.props;
    return (
      <div className="center_content_bottom detail_bot">
        <div className="center_content_inner">
          <div className="center_content_inner_head"><h5>Active</h5></div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head"><h5>Closed</h5></div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Customer Orders:</div>
          <div className="center_content_inner_val">{stats.active.customers_order}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Customer Orders:</div>
          <div className="center_content_inner_val">{stats.closed.customers_order}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Total Dollar Amount:</div>
          <div className="center_content_inner_val">{stats.active.total_dollar_amount}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Total Dollar Amount:</div>
          <div className="center_content_inner_val">{stats.closed.total_dollar_amount}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Average order size:</div>
          <div className="center_content_inner_val">{stats.active.average_order_size ? stats.active.average_order_size : '0'}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Average order size:</div>
          <div className="center_content_inner_val">{stats.closed.average_order_size ? stats.closed.average_order_size : '0'}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Approximate number of shares:</div>
          <div className="center_content_inner_val">{stats.active.approximate_number_of_share ? stats.active.approximate_number_of_share : '0'}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Shares allocated:</div>
          <div className="center_content_inner_val">{stats.closed.shares_allocated ? stats.closed.shares_allocated : '0'}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Number of shares over $10k:</div>
          <div className="center_content_inner_val">{stats.active.number_of_order_gt_10k}</div>
        </div>
        <div className="center_content_inner">
          <div className="center_content_inner_head">Number of shares over $10k:</div>
          <div className="center_content_inner_val">{stats.closed.number_of_order_gt_10k}</div>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  stats: React.PropTypes.any,
};

export default Stats;
