import React, { Component } from 'react';
import Node from './node.js';
import TreeObject from './treeObject.js';
import './../style/tree.css'

class Tree extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEmpty: true,
      treeData: null
    }
  }

  generateTree(userInputData){
    if(!userInputData){
      let newTree = new TreeObject({name: 'Hector', age: 90});
      for(var i = 0; i < 5; i++){
        newTree.addChild();
      }
      for(var j = 0; j < newTree.children.length; j++){
        for(var k = 0; k < 5; k++){
          if(Math.floor(Math.random() * 2) === 0){
            newTree.children[j].addChild();
          }
        }
      }
      console.log('New Tree is ', newTree);
      this.setState({
        isEmpty: false,
        treeData: newTree
      });
    }
  }

  render() {
    return (
      <section className='tree'>
        {!this.state.isEmpty ?
          <Node nodeData={this.state.treeData}/>
        :
          <button onClick={() => this.generateTree()}>Generate a Random Family Tree!</button>
        }
      </section>
    )
  }
}

export default Tree;
