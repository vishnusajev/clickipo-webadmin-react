
import React from 'react';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';

import ViewWrapper from 'components/ViewWrapper';
import { fetchOfferings, offeringSearch } from './actions';
import { makeSelectOfferings, makeSelectOfferingTableView } from './selectors';
import GridView from './gridView';
import TableView from './tableView';
import Header from './offeringHeader';

class Offerings extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      gridView: true,
    };
  }

  componentWillMount() {
    this.props.getOfferings();
  }

  handleChange = (event, index, value) => {
    this.setState({ value });
    this.props.getOfferings(value);
  }

  searchOffering = (event) => {
    this.props.searchOfferingByValue(event.target.value);
  }

  toggleView = (view) => {
    if (view === 'table') {
      this.setState({ gridView: false });
    } else if (view === 'grid') {
      this.setState({ gridView: true });
    }
  }

  render() {
    const { offerings, offeringTableView } = this.props;
    return (
      <article style={{ position: 'relative' }}>
        <Helmet
          title="Offerings"
        />
        <Header handleChange={this.handleChange} gridView={this.state.gridView} statusValue={this.state.value} toggleView={this.toggleView} />
        <ViewWrapper
          padding={`${this.state.gridView ? '95px 20px' : '0px 20px'}`}
          style={{ position: `${this.state.gridView ? '' : 'fixed'}` }}
          marginTop={`${this.state.gridView ? 'auto' : '95px'}`}
        >
          {
            this.state.gridView ? <GridView offerings={offerings} /> :
            <TableView offeringTableView={offeringTableView} searchOffering={this.searchOffering} />
          }
        </ViewWrapper>
      </article>
    );
  }
}

Offerings.propTypes = {
  getOfferings: React.PropTypes.func,
  searchOfferingByValue: React.PropTypes.func,
  offerings: React.PropTypes.any,
  offeringTableView: React.PropTypes.any,
};

function mapDispatchToProps(dispatch) {
  return {
    getOfferings: (status) => dispatch(fetchOfferings(status)),
    searchOfferingByValue: (value) => dispatch(offeringSearch(value)),
  };
}

const mapStateToProps = createStructuredSelector({
  offerings: makeSelectOfferings(),
  offeringTableView: makeSelectOfferingTableView(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offerings);
