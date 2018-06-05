import React, { Component } from 'react';

class Node extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='node'>
        <div className='node__node'>{this.props.nodeData.name}</div>
        <div className='node__children'>
        {this.props.nodeData.children.length !== 0 && this.props.nodeData.children.map((child, idx) =>
          <Node nodeData={child} key={idx} />
        )}
        </div>
      </div>
    )
  }
}

export default Node;
