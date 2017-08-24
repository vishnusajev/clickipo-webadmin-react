
export default function validate(values) {
  const errors = {};
  const emailReg = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
  if (!values.get('email') || (values.get('email') && !values.get('email').match(emailReg))) {
    errors.email = 'Please enter a valid email';
  }
  if (!values.get('password') || (values.get('password') && values.get('password').length < 6)) {
    errors.password = 'Please enter a valid password';
  }
  return errors;
}
