import { expect } from 'chai'
import Stack from '../src/stack'

describe( 'Stack', () => {
  describe( 'constructor', () => {
    it( 'initializes top to null', () => {
      const stack = new Stack()

      expect( stack.top ).to.be.null
    })
  })

  describe( '#push', () => {
    it( 'adds the entry to the top of the stack', () => {
      const entry = 'thing'
      const stack = new Stack()
      stack.push( entry )

      // This test relies on peek being implemented correctly...
      expect( stack.peek() ).to.equal( entry )
      // alternative test, which relies on implementation:
      // expect( stack.root.data ).to.equal( entry )
    })
  })

  describe( '#pop', () => {
    it( 'returns the entry at the top of the stack', () => {
      const stack = new Stack()
      const entryOne = 'jackie'
      const entryTwo = 'jormp-jomp'

      stack.push( entryOne )
      stack.push( entryTwo )

      expect( stack.pop() ).to.equal( entryTwo )
    })

    it( 'removes the entry at the top of the stack', () => {
      const stack = new Stack()
      const entryOne = 'jackie'
      const entryTwo = 'jormp-jomp'

      stack.push( entryOne )
      stack.push( entryTwo )
      stack.pop()

      expect( stack.top.data ).to.equal( entryOne )
    })

    it( 'returns null for an empty stack', () => {
      const stack = new Stack()

      expect( stack.pop() ).to.be.null
    })
  })

  describe( '#peek', () => {
    it( 'returns the entry at the top of the stack', () => {
      const stack = new Stack()
      const entry = 'shipoopi'
      stack.push( entry )

      expect( stack.peek() ).to.equal( entry )
    })

    it( 'does not mutate the stack (peek is idempotent)', () => {
      const stack = new Stack()
      const entry = 'shipoopi'
      stack.push( entry )

      expect( stack.peek() === stack.peek() ).to.be.true
    })

    it( 'returns null for an empty stack', () => {
      const stack = new Stack()

      expect( stack.peek() ).to.be.null
    })
  })

  describe( '#isEmpty', () => {
    it( 'is true for a new stack', () => {
      const stack = new Stack()

      expect( stack.isEmpty() ).to.be.true
    })

    it( 'is false for a stack containing elements', () => {
      const stack = new Stack()
      stack.push( 'data' )

      expect( stack.isEmpty() ).to.be.false
    })
  })
})
