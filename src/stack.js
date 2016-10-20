import Node from './node'

export default class Stack {
  constructor() {
    this.top = null
  }

  push( entry ) {
    // @Moniarchy
    // const node = new Node( entry )
    // node.next = this.top
    // this.top = node

    this.top = new Node( entry, this.top )
  }

  pop() {
    if( ! this.isEmpty() ) {
      const temp = this.top

      this.top = this.top.next

      return temp.data
    } else {
      return null
    }
  }

  peek() {
    if( ! this.isEmpty() ) {
      return this.top.data
    } else {
      return null
    }
  }

  isEmpty() {
    return this.top == null
  }
}
