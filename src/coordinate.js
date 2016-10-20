/* @flow */

export default class Coordinate {
  x : number
  y : number

  constructor( x : number, y : number ) {
    this.x = x
    this.y = y
  }

  left() {
    return new Coordinate( this.x - 1, this. y )
  }

  right() {
    return new Coordinate( this.x + 1, this. y )
  }

  up() {
    return new Coordinate( this.x, this.y - 1 )
  }

  down() {
    return new Coordinate( this.x, this.y + 1 )
  }

  containedBy( origin, bound ) {
    return this.x >= origin.x && this.x < bound.x &&
      this.y >= origin.y && this.y < bound.y
  }

  equals( other ) {
    return other instanceof Coordinate &&
      this.x === other.x &&
      this.y === other.y
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }
}
