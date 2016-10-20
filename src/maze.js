import Coordinate from './coordinate'

export default class Maze {
  constructor( height, width ) {
    this.height = height
    this.width = width
    this.maze = Array( height ).fill().map( _ => Array( width ).fill( ' ' ) )

    this.origin = new Coordinate( 0, 0 )
    this.bound = new Coordinate( width, height )
  }

  setBlocked( coordinate ) {
    this.maze[ coordinate.x ][ coordinate.y ] = 'X'
  }

  setVisited( coordinate ) {
    this.maze[ coordinate.x ][ coordinate.y ] = '*'
  }

  setPath( coordinate ) {
    this.maze[ coordinate.x ][ coordinate.y ] = '.'
  }

  at( coordinate ) {
    return this.maze[ coordinate.x ][ coordinate.y ]
  }

  nextUnvisited( coordinate ) {
    const directions = [ 'left', 'right', 'up', 'down' ]

    return directions.map( direction => coordinate[ direction ]() )
      .find( next =>
        next.containedBy( this.origin, this.bound ) && this.at( next ) === ' '
      )
  }

  start() {
    return new Coordinate( 1, 0 )
  }

  end() {
    return new Coordinate( this.height - 2, this.width - 1 )
  }

  toString() {
    return this.maze.reduce( ( memo, row, index ) => {
      return `${memo}\n${index % 10} ${row.join(' ')}`
    }, this.headerRow() )
  }

  headerRow() {
    return [
      "  ",
      ...( Array( this.width ).fill( 0 ).map( (_, index) => `${index % 10} ` ) )
    ].join( '' ).trimRight()
  }
}
