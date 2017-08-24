import React from 'react/lib/React';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';
import { Card, CardText, CardTitle } from 'material-ui/Card';
// import { reset, change } from 'redux-form/immutable';

import ViewWrapper from 'components/ViewWrapper';
import CenteredContent from 'components/CenteredContent';
import Padding from 'components/PaddingWrapper';
import logo from 'images/logo-4.png';
import { makeSelectPasswordRecoveryMessage } from 'containers/App/selectors';
import RecoverPasswordForm from './form';
import { submitRecoveryForm } from './actions';

class PasswordRecovery extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { handleFormSubmit, resetMessage } = this.props;
    return (
      <article>
        <Helmet
          title="ClickIPO Admin"
        />
        <ViewWrapper padding="10px 20px 80px" className="login">
          <CenteredContent className="small-5 columns small-centered">
            <Padding value="40px">
              <img src={logo} alt="" height="62" width="200" />
            </Padding>
          </CenteredContent>
          <div className="small-5 columns small-centered">
            <Card>
              <CardTitle
                style={{ paddingBottom: '0px' }}
                title="Reset Password"
                titleStyle={{ textAlign: 'center', fontSize: '34px', marginTop: '20px', marginBottom: '20px' }}
              >
                <CenteredContent> {resetMessage} </CenteredContent>
              </CardTitle>
              <CardText style={{ paddingTop: '0px' }}>
                <RecoverPasswordForm handleFormSubmit={handleFormSubmit} />
              </CardText>
            </Card>
          </div>
          <CenteredContent className="small-5 columns small-centered">
            <Padding value="25px">
              <a href="http://clickipo.com" className="visit-main">
                visit main site
              </a>
            </Padding>
          </CenteredContent>
        </ViewWrapper>
      </article>
    );
  }
}

PasswordRecovery.propTypes = {
  handleFormSubmit: React.PropTypes.func,
  resetMessage: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    handleFormSubmit: (data) => dispatch(submitRecoveryForm(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  resetMessage: makeSelectPasswordRecoveryMessage(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery);
