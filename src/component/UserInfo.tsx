import React, { Component } from 'react';
import { observer } from 'mobx-react';
import UserName from './UserName';

@observer
class UserInfo extends Component {
    render() {
        return (
            <div className="userinfo" key='userinfo'>
                <h1>UserInfo Component</h1>
                <UserName></UserName>
            </div>
        )
    }
}

export default UserInfo;