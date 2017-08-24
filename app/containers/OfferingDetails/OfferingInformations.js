import React from 'react';

class OfferingInformation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { offering, offeringType } = this.props;
    return (
      <div>
        <div className="information_heading">Company</div>
        <p>{offering.name}</p>
        {offering.description &&
          <div>
            <div className="information_heading">Description</div>
            <p>{offering.description}</p>
          </div>
        }
        {offering.offering_underwriters_attributes[0] &&
        <div>
          <div className="information_heading">Lead Underwriters</div>
          <p>offering.offering_underwriters_attributes[0].name</p>
        </div>
        }
        {offering.ticker_symbol &&
          <div>
            <div className="information_heading">Stock Ticker</div>
            <p>{offering.ticker_symbol}</p>
          </div>
        }
        {offering.categories && offering.categories.length ?
          <div>
            <div className="information_heading">Industry</div>
            <p>{offering.categories[0].name}</p>
          </div>
          : ''
        }
        {offeringType &&
        <div>
          <div className="information_heading">Offering Type</div>
          <p>{offeringType.name}</p>
        </div>
        }
        {offering.prospectus_url &&
          <div>
            <div className="information_heading">Prospectus</div>
            <p><a href={offering.prospectus_url} target="_blank" >{offering.prospectus_url}</a></p>
          </div>
        }
      </div>
    );
  }
}

OfferingInformation.propTypes = {
  offering: React.PropTypes.any,
  offeringType: React.PropTypes.any,
};

export default OfferingInformation;
