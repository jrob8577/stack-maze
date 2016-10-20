const stack = new Stack()

class Node {
  constructor( data, next=null ) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push( entry ) {
    this.top = new Node( entry, this.top )
  }

  pop() {

  }

  peek() {

  }

  isEmpty() {

  }

  clear() {

  }
}
