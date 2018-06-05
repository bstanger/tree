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

export default TreeObject;
