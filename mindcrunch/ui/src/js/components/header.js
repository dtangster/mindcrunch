import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';

class Header extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Button primary>Login</Button>
        </Menu.Item>

        <Menu.Item>
          <Button>Sign Up</Button>
        </Menu.Item>
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({} , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
