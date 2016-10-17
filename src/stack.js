import Node from './node'

class Stack {
  constructor() {
    this.root = null;
  }

  push( entry ) {
    if( ! isEmpty() ) {
      this.root = new Node( entry, this.root );
    }
  }

  pop() {
    temp = this.root

    if( this.root != null ) {
      this.root = this.root.next;
    }

    return temp
  }

  peek() {
    if( ! isEmpty() ) {
      return root.data;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.root == null;
  }
}
