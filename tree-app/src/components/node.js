import React, { Component } from 'react';
import './../style/node.css';
import './../style/buttons.css';

class Node extends Component {
  render() {
    return (
      <div className='node'>

        <div className='parent'>
          <button className='parent__add small-icon-btn' onClick={() => this.props.addNode(this.props.nodeData.id)}>+</button>
          <div className='parent__circle'><span className='parent__name'>{this.props.nodeData.name}</span></div>
          <button className='parent__remove small-icon-btn' onClick={() => this.props.removeNode(this.props.nodeData.id)}>-</button>
        </div>

        {this.props.nodeData.children.length !== 0 &&
          <div className='children'>
          {this.props.nodeData.children.map((child, idx) =>
            <Node nodeData={child} key={idx} addNode={this.props.addNode} removeNode={this.props.removeNode}/>
          )}
          </div>
        }
      </div>
    )
  }
}

export default Node;
