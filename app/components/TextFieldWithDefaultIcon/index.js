import React from 'react';
import { TextField } from 'redux-form-material-ui';
import Position from 'components/PositionWrapper';


class TextFieldWithDefaultIcon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { icon, iconStyle, inputRef, children, ...rest } = this.props;
    return (
      <Position position="relative" className="clearfix">
        <span style={iconStyle}>{icon}</span>
        <TextField
          ref={inputRef}
          {...rest}
        />
        {children}
      </Position>
    );
  }
}

TextFieldWithDefaultIcon.propTypes = {
  icon: React.PropTypes.any,
  iconStyle: React.PropTypes.object,
  inputRef: React.PropTypes.func,
  children: React.PropTypes.any,
};

export default TextFieldWithDefaultIcon;
