import React from 'react';
import Card from 'components/CardView';
import { parseDate, currency } from './Helpers';

class GridView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { offerings } = this.props;
    if (offerings && offerings.length > 0) {
      return (
        <div>
          {
          offerings.map((item, i) => (
            <div className="small-12 medium-6 large-3 columns" style={{ float: 'left' }} key={i}>
              <Card
                cardStyle={{ textAlign: 'center', color: 'rgba(0,0,0,0.87)' }}
                cardDividerStyle={{ maxHeight: '65px', height: '65px', position: 'relative' }}
                displayFooter
                data={item}
                linkPath={`/offering-detail?id=${item.id}`}
                footerText="View Details"
                heading={<div className="offering_card_heading">{item.name}</div>} content={
                  <div>
                    <div className="inline">
                      <div style={{ minHeight: '100px' }}>
                        <img src={item.logo_large} alt="ClickIPO" style={{ maxHeight: '75px', width: 'auto' }} />
                      </div>
                    </div>
                    <div style={{ minHeight: '40px' }}>
                      {item.offering_date_attributes &&
                      <div style={{ fontSize: '16px', paddingBottom: '15px', paddingTop: '5px' }}>Public {parseDate(item.offering_date_attributes.max_date)} </div>
                      }
                    </div>
                    <div style={{ padding: '20px' }}>Final Investment Amount</div>
                    <div style={{ fontSize: '24px', fontWeight: '400', lineHeight: '32px' }}>$ 3.77MM</div>
                    <div style={{ fontSize: '24px', fontWeight: '400', lineHeight: '32px' }}>({item.offering_share_attributes ? item.offering_share_attributes.anticipated_shares.toLocaleString() : '0'} shares)</div>
                    <div style={{ paddingTop: '20px' }}>Final price: ${item.final_price !== null ? currency(item.final_price) : '0.00'}</div>
                    <div style={{ paddingBottom: '20px' }}>Customer Orders: 500</div>
                  </div>
                 }
              />
            </div>
          ))
          }
        </div>
      );
    }
    return (null);
  }
}

GridView.propTypes = {
  offerings: React.PropTypes.any,
};

export default GridView;
