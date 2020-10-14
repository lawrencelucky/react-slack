import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import Channels from './Channels';
import UserPanel from './UserPanel';
import DirectMessages from './DirectMessages';
import Starred from './Starred';

class SidePanel extends React.Component {
  state = {};
  render() {
    const { currentUser, primaryColor } = this.props;

    return (
      <Menu
        size='large'
        inverted
        fixed='left'
        vertical
        style={{ background: primaryColor, fontSize: '1.2rem' }}
      >
        <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
        <Starred currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SidePanel);
