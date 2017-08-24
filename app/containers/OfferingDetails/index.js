
import React from 'react';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';
import { Tabs, Tab } from 'material-ui/Tabs';

import Card from 'components/CardView';
import ViewWrapper from 'components/ViewWrapper';
import { makeSelectOfferingDetails, makeSelectOfferingStats, makeSelectOfferingType, makeSelectOfferingCustomers } from 'containers/Offerings/selectors';
import { currency } from 'containers/Offerings/Helpers';
import { fetchOfferingDetails, fetchOfferingStats, fetchCustomers, fetchOfferingType, ClearData } from './actions';
import Stats from './Stats';
import OfferingInformation from './OfferingInformations';
import CustomerTable from './Customers';

class OfferingDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.resetData();
    if (!this.props.offering) {
      this.props.getOfferingDetails(this.props.location.query.id);
    }
    this.props.getStats(this.props.location.query.id);
    // if (this.props.offering.offering_underwriters_attributes[0]) this.props.getCustomers(this.props.offering.offering_underwriters_attributes[0].underwriter_id);
    this.props.getCustomers(this.props.location.query.id);
  }

  componentDidUpdate() {
    if (this.props.offering && this.props.offering.offering_type_id && !this.props.offeringType) {
      this.props.getOfferingType(this.props.offering.offering_type_id);
    }
  }

  render() {
    const { offering, stats, offeringType, customers } = this.props;
    return (
      <article style={{ position: 'relative' }}>
        <Helmet
          title="Offerings"
        />
        <ViewWrapper
          marginTop="88px"
        >
          <div className="mid_bar_inner">
            <div className="mid_head inline">Consolidated Communications Holdings-BLOCK</div>
          </div>

          <div className="small-12 columns">
            <div className="small-6 columns">
              <div className="small-12 columns">
                <Card
                  heading="Pricing Details" content={
                    <table>
                      <tbody>
                        <tr className="row">
                          <td className="small-5 td-title">Price per Share</td>
                          <td className="small-4 td-title">Shares</td>
                          <td className="small-3 td-title small-offset-2">Effective Date</td>
                        </tr>
                        {offering &&
                          <tr className="row">
                            <td className="small-5"><div className="td-data" style={{ marginTop: '30px' }}>{offering.offering_price_attributes ? `$${currency(offering.offering_price_attributes.max_price)}` : ''}</div></td>
                            <td className="small-4"><div className="td-data" style={{ marginTop: '30px' }}>{offering.offering_share_attributes ? offering.offering_share_attributes.anticipated_shares.toLocaleString() : ''}</div></td>
                            <td className="small-3"><div className="td-data" style={{ marginTop: '30px' }}>{offering.effective_date}</div></td>
                          </tr>
                         }
                      </tbody>
                    </table>
                }
                />
              </div>


              <div className="small-12 columns">
                <Card
                  heading="Offering Information" content={
                    <div>
                      {offering &&
                        <OfferingInformation offering={offering} offeringType={offeringType} />
                      }
                    </div>
            }
                />
              </div>
            </div>

            <div className="small-6 columns">
              <div className="small-12 columns">
                <Tabs tabItemContainerStyle={{ backgroundColor: 'white' }} className="dataTab">
                  <Tab label="STATS" style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                    {stats &&
                      <Stats stats={stats} />
                    }
                  </Tab>
                  <Tab label="INVESTORS" style={{ color: 'rgba(0, 0, 0, 0.54)' }} >
                    {customers &&
                    <CustomerTable customers={customers} />
                  }
                  </Tab>
                  <Tab label="HISTORY" style={{ color: 'rgba(0, 0, 0, 0.54)' }} >
                  </Tab>
                  <Tab label="NOTIFICATIONS" style={{ color: 'rgba(0, 0, 0, 0.54)' }} >
                  </Tab>
                </Tabs>
              </div>
            </div>

          </div>
        </ViewWrapper>
      </article>
    );
  }
}

OfferingDetails.propTypes = {
  getOfferingDetails: React.PropTypes.func,
  getStats: React.PropTypes.func,
  location: React.PropTypes.object,
  offering: React.PropTypes.any,
  stats: React.PropTypes.any,
  getCustomers: React.PropTypes.func,
  getOfferingType: React.PropTypes.func,
  offeringType: React.PropTypes.any,
  resetData: React.PropTypes.func,
  customers: React.PropTypes.any,
};

function mapDispatchToProps(dispatch) {
  return {
    getOfferingDetails: (id) => { dispatch(fetchOfferingDetails(id)); },
    getStats: (id) => { dispatch(fetchOfferingStats(id)); },
    getCustomers: (id) => { dispatch(fetchCustomers(id)); },
    getOfferingType: (id) => { dispatch(fetchOfferingType(id)); },
    resetData: () => { dispatch(ClearData()); },
  };
}

const mapStateToProps = createStructuredSelector({
  offering: makeSelectOfferingDetails(),
  stats: makeSelectOfferingStats(),
  offeringType: makeSelectOfferingType(),
  customers: makeSelectOfferingCustomers(),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferingDetails);
