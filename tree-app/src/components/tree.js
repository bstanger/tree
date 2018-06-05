import React, { Component } from 'react';
import Node from './node.js';
import TreeObject from './treeObject.js';
import './../style/tree.css';
import './../style/buttons.css';

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
      for(var i = 0; i < 3; i++){ // Add up to 3 children
        newTree.addChild();
      }
      for(var j = 0; j < newTree.children.length; j++){ // Create 3 levels deep
        for(var k = 0; k < 3; k++){
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

  addNode(nodeId){
    let treeDataCopy = Object.assign(new TreeObject({}), this.state.treeData);
    if(nodeId === 0){
      treeDataCopy.addChild();
      this.setState({treeData: treeDataCopy});
      return;
    }
    let recurseChildren = (children) => {
      for(var i = 0; i < children.length; i++){
        let currentChild = children[i];
        if(currentChild.id === nodeId){
          currentChild.addChild();
          break;
        } else if(currentChild.children.length){
          recurseChildren(currentChild.children)
        }
      }
    }
    recurseChildren(treeDataCopy.children);
    this.setState({treeData: treeDataCopy});
  }

  removeNode(nodeId){
    let treeDataCopy = Object.assign(new TreeObject({}), this.state.treeData);
    if(nodeId === 0){
      this.removeTree();
      return;
    }
    let recurseChildren = (children, parent) => {
      for(var i = 0; i < children.length; i++){
        let currentChild = children[i];
        if(currentChild.id === nodeId){
          let grandchildren = parent.removeChild(nodeId);
          grandchildren.forEach((node) => {
            parent.addChild(node);
          })
          break;
        } else if(currentChild.children.length){
          recurseChildren(currentChild.children, currentChild)
        }
      }
    }
    recurseChildren(treeDataCopy.children, treeDataCopy);
    this.setState({treeData: treeDataCopy});
  }

  removeTree(){
    this.setState({
      isEmpty: true,
      treeData: null
    })
  }

  render() {
    return (
      <section className='tree'>
        {this.state.isEmpty ?
          <button className='large-action-btn' onClick={() => this.generateTree()}>Generate a Random Family Tree!</button>
        :
          <Node nodeData={this.state.treeData} addNode={this.addNode.bind(this)} removeNode={this.removeNode.bind(this)}/>
        }
      </section>
    )
  }
}

export default Tree;
