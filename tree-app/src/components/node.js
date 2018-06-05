import React, { Component } from 'react';

class Node extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        {this.props.children.length &&
          <div>Hey</div>
        }
      </div>
    )
  }
}

export default Node;
