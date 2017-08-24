
export default function validate(values) {
  const errors = {};
  if (!values.get('password') || (values.get('password') && values.get('password').length < 6)) {
    errors.password = 'Please enter a valid password';
  }
  if (!values.get('password_confirmation') || (values.get('password_confirmation') && values.get('password_confirmation').length < 6)) {
    errors.password_confirmation = 'Please enter a valid password';
  }
  if (values.get('password_confirmation') && values.get('password') && values.get('password_confirmation') !== values.get('password')) {
    errors.password_confirmation = 'Passwords donot match';
  }
  return errors;
}
