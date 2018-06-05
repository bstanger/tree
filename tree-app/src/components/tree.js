import React, { Component } from 'react';
import Node from './node.js';
// import TreeObject from

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
          newTree.children[j].addChild();
        }
      }
      console.log('New Tree is ', newTree);
      this.setState = {
        isEmpty: false,
        treeData: newTree
      };
    }
  }

  render() {
    return (
      <section>
        {!this.state.isEmpty ?
          <Node nodeData={this.state.nodeData}/>
        :
          <button onClick={() => this.generateTree()}>Generate a Random Family Tree!</button>
        }
      </section>
    )
  }
}

class TreeObject {
  constructor(props){
    this.name = props.name || null;
    this.age = props.age || null;
    this.children = props.children || [];
  }

  addChild(childProps){
    childProps = childProps || this.randomizeNodeData();
    if(childProps){
      let newChild = new TreeObject(childProps);
      this.children.push(newChild);
    }
  }

  randomizeNodeData(){
    if(Math.floor(Math.random() * 2) === 0){
      return null
    }
    const randomNames = ['Alice', 'Bob', 'Christine', 'Deepa', 'Ed', 'Filina', 'Gary', 'Helena', 'Ignacio', 'Jack', 'Keisha', 'Lee'];
    const nameIdx = Math.floor(Math.random() * randomNames.length);
    const name = randomNames[nameIdx];
    const age = Math.ceil(Math.random() * 100);
    return {name, age}
  }

  // removeChild(){
  //   alert('remove child');
  // }
}

export default Tree;
