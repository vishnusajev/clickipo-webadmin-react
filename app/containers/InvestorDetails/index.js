
import React from 'react';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/action/account-circle';
import { Tabs, Tab } from 'material-ui/Tabs';
import ListItem from 'material-ui/List/ListItem';

import ViewWrapper from 'components/ViewWrapper';
import { parseDate } from 'containers/Offerings/Helpers';
import Card from 'components/CardView';
import { makeSelectUserDetails, makeSelectActiveOfferings, makeSelectClosedOfferings, makeSelectOrderStatus } from './selectors';
import { fetchUserDetails, fetchActiveOfferings, fetchClosedOfferings, fetchOrderStatus } from './actions';
import OrderList from './OrderList';
import OrderStatus from './Stats';

class InvestorDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      tab: 'active',
    };
    this.handleActive = this.handleActive.bind(this);
  }

  componentWillMount() {
    this.props.getInitialData(this.props.location.query.id);
  }

  handleActive = (value) => {
    this.setState({ tab: value });
  }

  render() {
    const { userDetails, activeOfferings, closedOfferings, orderStatus } = this.props;
    return (
      <article>
        <Helmet
          title="Investor Details"
        />
        <ViewWrapper marginTop="88px">

          <div className="small-12 colomn" style={{ paddingBottom: '20px' }}>
            <div className="inline" style={{ paddingLeft: '20px' }}>
              <ListItem
                className="inline"
                leftAvatar={
                  <Avatar icon={<FileFolder />} />
                 }
              >
                {userDetails ? `${userDetails.first_name} ${userDetails.last_name}` : ''}
              </ListItem>
            </div>
            <div className="top_right" style={{ paddingTop: '20px' }}>
              {userDetails && userDetails.created_at &&
                <div className="save_status inline" style={{ color: 'orange' }}>Registered with CIPO: {parseDate(userDetails.created_at)} </div>
              }
              {userDetails && userDetails.connected_date &&
                <div className="save_status inline" style={{ color: 'orange' }}>Connected to BD: {parseDate(userDetails.connected_date)} </div>
              }
            </div>
          </div>

          <div className="row">
            <div className="small-6 columns">
              <Tabs tabItemContainerStyle={{ backgroundColor: 'white' }} className="dataTab">
                <Tab label="Active" style={{ color: 'rgba(0, 0, 0, 0.54)' }} onActive={() => this.handleActive('active')}>
                  <OrderList orders={activeOfferings} />
                </Tab>
                <Tab label="Closed" style={{ color: 'rgba(0, 0, 0, 0.54)' }} onActive={() => this.handleActive('closed')} >
                  <OrderList orders={closedOfferings} />
                </Tab>
              </Tabs>
            </div>

            <div className="small-6 columns">
              <Card
                heading="Customer Stats" content={
                  <div style={{ minHeight: '135px' }}>
                    {orderStatus && this.state.tab === 'active' &&
                      <OrderStatus orderStatus={orderStatus.active} />
                    }
                    {orderStatus && this.state.tab === 'closed' &&
                      <OrderStatus orderStatus={orderStatus.closed} />
                    }
                  </div>
              }
              />
            </div>
          </div>

        </ViewWrapper>
      </article>
    );
  }
}

InvestorDetails.propTypes = {
  getInitialData: React.PropTypes.func,
  userDetails: React.PropTypes.any,
  activeOfferings: React.PropTypes.any,
  closedOfferings: React.PropTypes.any,
  orderStatus: React.PropTypes.any,
  location: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: (id) => { dispatch(fetchUserDetails(id)); dispatch(fetchActiveOfferings(id)); dispatch(fetchClosedOfferings(id)); dispatch(fetchOrderStatus(id)); },
  };
}

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectUserDetails(),
  activeOfferings: makeSelectActiveOfferings(),
  closedOfferings: makeSelectClosedOfferings(),
  orderStatus: makeSelectOrderStatus(),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestorDetails);
