import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class User extends Component {
    render() {
        // const { title } = AppStore
        return (
            <div className="user" key='user'>
                <h1>User Component</h1>
            </div>
        )
    }
}

export default User;
