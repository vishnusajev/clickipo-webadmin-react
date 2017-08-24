import React from 'react/lib/React';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';
import { Card, CardText, CardTitle } from 'material-ui/Card';
// import { reset, change } from 'redux-form/immutable';

import ViewWrapper from 'components/ViewWrapper';
import CenteredContent from 'components/CenteredContent';
import Padding from 'components/PaddingWrapper';
import { makeSelectPasswordResetMessage } from 'containers/App/selectors';
import logo from 'images/logo-4.png';
import ResetPasswordForm from './form';
import { submitResetForm, setResetToken } from './actions';

class ResetPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.resetPasswordToken(this.props.location.query.reset_password_token);
  }

  render() {
    const { handleFormSubmit, resetError } = this.props;
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
                <CenteredContent> { resetError } </CenteredContent>
              </CardTitle>
              <CardText style={{ paddingTop: '0px' }}>
                <ResetPasswordForm handleFormSubmit={handleFormSubmit} />
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

ResetPassword.propTypes = {
  handleFormSubmit: React.PropTypes.func,
  resetPasswordToken: React.PropTypes.func,
  location: React.PropTypes.object,
  resetError: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    handleFormSubmit: (data) => dispatch(submitResetForm(data)),
    resetPasswordToken: (token) => dispatch(setResetToken(token)),
  };
}

const mapStateToProps = createStructuredSelector({
  resetError: makeSelectPasswordResetMessage(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
