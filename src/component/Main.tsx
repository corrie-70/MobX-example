import React, { Component } from 'react';
import { observer } from 'mobx-react';
import User from './User';
import UserInfo from './UserInfo';

// type MainProps = {
//   store: AppStore
// }

@observer
class Main extends Component {
  render() {
    return (
      <div className="main" key='main'>
        <h1>Main Component</h1>
        <div className='main-content'>
          <User></User>
          <UserInfo></UserInfo>
        </div>
      </div>
    )
  }
}

export default Main;
