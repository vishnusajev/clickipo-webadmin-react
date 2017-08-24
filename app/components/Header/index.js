import React from 'react';
import Logo from 'images/logoblue.png';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Settings from 'material-ui/svg-icons/action/settings';
import Link from 'react-router/lib/Link';

class Header extends React.PureComponent { //eslint-disable-line
  constructor(props) {
    super(props);

    this.state = {
      openSystem: false,
      openContent: false,
      openAdmin: false,
    };
  }

  openAccounts = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openSystem: true,
      anchorEl: event.currentTarget,
    });
  };

  openManagement = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openContent: true,
      anchorEl: event.currentTarget,
    });
  };

  openAdmin = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openAdmin: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSystem: false,
      openContent: false,
      openAdmin: false,
    });
  };

  signOut = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  }

  render() {
    return (
      <div className="outer">
        <div className="top_bar">
          <div className="top_left">
            <Link to="/offerings" >
              <div className="logo_wrap inline">
                <img src={Logo} alt="ClickIPO" />
              </div>
            </Link>
            <div className="option_wrap inline">
              <Link to="/offerings" >
                <FlatButton
                  labelStyle={{ textTransform: 'capitalize', color: 'rgb(74,74,74)' }}
                  label="Offerings"
                />
              </Link>
            </div>
          </div>
          <div className="top_right">
            <FlatButton
              labelStyle={{ textTransform: 'capitalize', color: '#299AA9' }}
              labelPosition="before"
              onTouchTap={this.openAdmin}
              icon={<Settings />}
              label="Welcome, Super Admin"
            />
            <Popover
              open={this.state.openAdmin}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Sign out" onTouchTap={this.signOut} />
              </Menu>
            </Popover>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  data: React.PropTypes.array,
};

export default Header;
