import React from 'react/lib/React';
import { reduxForm, Field } from 'redux-form/immutable';
import TextField from 'redux-form-material-ui/lib/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import Padding from 'components/PaddingWrapper';
import Link from 'react-router/lib/Link';
import validate from './formValidation';

const fields = ['password', 'password_confirmation'];

class ResetPasswordForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.msisdnNode = null;
    this.state = {
    };
  }

  render() {
    const { handleSubmit, submitting, handleFormSubmit } = this.props;
    return (
      <form className="row" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="small-12 columns">
          <Field
            name="password"
            component={TextField}
            hintText=""
            floatingLabelText="Password"
            autoComplete="off"
            fullWidth
            type="Password"
            floatingLabelFocusStyle={{ color: '#FFBC59' }}
            underlineFocusStyle={{ borderColor: '#FFBC59' }}
          />
        </div>
        <div className="small-12 columns">
          <Field
            name="password_confirmation"
            component={TextField}
            hintText=""
            floatingLabelText="Password Confirmation"
            autoComplete="off"
            fullWidth
            type="Password"
            floatingLabelFocusStyle={{ color: '#FFBC59' }}
            underlineFocusStyle={{ borderColor: '#FFBC59' }}
          />
        </div>
        <div className="small-12 columns">
          <RaisedButton type="submit" backgroundColor="rgb(141,199,63)" style={{ marginTop: '50px' }} disabled={submitting} label="Reset" fullWidth />
        </div>
        <div className="small-12 columns small-centered">
          <Padding value="25px 0px 5px 0px" style={{ textAlign: 'center' }}>
            <Link to="/login" >
              Return To Login
            </Link>
          </Padding>
        </div>
      </form>
    );
  }
}

ResetPasswordForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  handleFormSubmit: React.PropTypes.func,
};

const ClickIPOResetPasswordForm = reduxForm({
  form: 'ClickIPOResetPasswordForm',
  fields,
  validate,
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  touchOnBlur: false,
})(ResetPasswordForm);

export default ClickIPOResetPasswordForm;
