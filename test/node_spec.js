import { expect } from 'chai'
import Node from '../src/node'

describe( 'Node', () => {
  describe( 'constructor', () => {
    it( 'records reference to data', () => {
      const entry = 'slartibartfast'
      const node = new Node( entry )

      expect( node.data ).to.equal( entry )
    })

    it( 'initializes `next` to null when not provided', () => {
      const node = new Node( 'slartibartfast' )

      expect( node.next ).to.be.null
    })

    it( 'initializes `next` with specified node', () => {
      const test = new Node( 'improbability drive' )
      const node = new Node( 'beeblebrox', test )

      expect( node.next ).to.equal( test )
    })
  })
})
