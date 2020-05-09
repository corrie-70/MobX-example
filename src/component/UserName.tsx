import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class UserName extends Component {
    render() {
        return (
            <div className="username" key='username'>
                <h1>UserName Component</h1>
            </div>
        )
    }
}

export default UserName;