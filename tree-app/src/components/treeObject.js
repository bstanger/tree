let counter = 0;

class TreeObject {
  constructor(props){
    this.id = props.id || 0;
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
    const id = ++counter;
    return {name, age, id}
  }

  removeChild(nodeId){
    let removedChild = null;
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].id === nodeId){
        removedChild = this.children.splice(i, 1);
      }
    }
    return removedChild[0].children;
  }
}

export default TreeObject;
