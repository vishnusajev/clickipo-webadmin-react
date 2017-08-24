/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoaderSpinner from 'containers/App/GlobalLoader';

import Header from 'components/Header';
import { makeSelectCurrentUser } from './selectors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CACACA',
    accent1Color: '#E18156',
  },
  tabs: {
    backgroundColor: '#00BB6E',
    textColor: '#008A4F',
    selectedTextColor: '#FFFFFF',
  },
});

class App extends React.PureComponent { //eslint-disable-line

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const { children, user } = this.props;
    if (user === null) {
      return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <Helmet
                titleTemplate="%s"
                defaultTitle="ClickIPO Admin"
                meta={[
                  { name: 'description', content: 'ClickIPO Admin' },
                ]}
              />
              {React.Children.toArray(children)}
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Helmet
              titleTemplate="%s"
              defaultTitle="ClickIPO Admin"
              meta={[
                { name: 'description', content: 'ClickIPO Admin' },
              ]}
            />
            <Header />
            <LoaderSpinner />
            {React.Children.toArray(children)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  user: React.PropTypes.string,
};


const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
});

export default connect(mapStateToProps, null)(App);
