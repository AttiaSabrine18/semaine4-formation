// UserInfo.js
import React from 'react';
class UserInfo extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Nom: {name}</p>
        <p>Âge: {age}</p>
      </div>
    );
  }
}

export default UserInfo;
