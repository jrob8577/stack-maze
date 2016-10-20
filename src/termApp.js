import ctx from 'axel'
import fs from 'fs'
import { usleep, sleep } from 'sleep'

import MazeSolver from './maze_solver'
import MazeReader from './maze_reader'
import Coordinate from './coordinate'

const file = process.argv[ process.argv.length - 1 ]
console.log( `Opening ${file}` )

if( ! fs.existsSync( file ) ) {
  console.log( 'Please provide the path to the maze file.' )
}

const mazeReader = new MazeReader( file )
const maze = mazeReader.open()
const mazeSolver = new MazeSolver( maze )

ctx.clear()
ctx.bg( 0, 0, 255 )

for( let i = 0; i < maze.height; i++ ) {
  for( let j = 0; j < maze.width; j++ ) {
    const c = maze.at( new Coordinate( i, j ))

    if( c === 'X' ) {
      ctx.point( j * 2, i + 1 )
      ctx.point( j * 2 + 1, i + 1 )
    }
  }
}

const update = coordinate => {
  const char = maze.at( coordinate )

  if( char === '*' ) {
    ctx.fg( 255, 0, 0 )
  } else {
    ctx.fg( 0, 255, 0 )
  }

  ctx.text( coordinate.y * 2, coordinate.x + 1, char )
  ctx.text( coordinate.y * 2 + 1, coordinate.x + 1, char )
  usleep( 10000 )
}

ctx.bg( 0, 0, 0 )

mazeSolver.solve( update )
sleep( 5 )
