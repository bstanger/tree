import React, { Component } from 'react';
import './../style/node.css';

class Node extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='node'>
        <div className='parent'>
          <div className='parent__circle'>
            <span className='parent__name'>{this.props.nodeData.name}</span>
          </div>
        </div>
        <div className='children'>
        {this.props.nodeData.children.length !== 0 && this.props.nodeData.children.map((child, idx) =>
          <Node nodeData={child} key={idx} />
        )}
        </div>
      </div>
    )
  }
}

export default Node;
