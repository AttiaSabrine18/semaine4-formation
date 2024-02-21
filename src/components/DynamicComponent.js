// DynamicComponent.js
import React from 'react';
class DynamicComponent extends React.Component {
  render() {
    const { content, title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}
export default DynamicComponent;
