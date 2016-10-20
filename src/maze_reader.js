import fs from 'fs'
import Maze from './maze'
import Coordinate from './coordinate'

export default class MazeReader {
  constructor( fileName ) {
    this.fileName = fileName
  }

  open() {
    const lines = this.getFileLines()

    const height = parseInt( lines[ 0 ] )
    const width = parseInt( lines[ 1 ] )

    const maze = new Maze( height, width )

    for( let x = 0; x < height; x++ ) {
      for( let y = 0; y < width && y < lines[ x + 2 ].length; y++ ) {
        if( lines[ x + 2 ].charAt( y ) !== ' ' ) {
          maze.setBlocked( new Coordinate( x, y ))
        }
      }
    }

    return maze
  }

  getFileLines() {
    return fs.readFileSync( this.fileName, 'utf8' ).split( "\n" )
  }
}
