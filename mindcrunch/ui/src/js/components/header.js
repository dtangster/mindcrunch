import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
      <div>hi</div>
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
