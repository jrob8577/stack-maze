import fs from 'fs'
import MazeSolver from './maze_solver'
import MazeReader from './maze_reader'

const file = process.argv[ process.argv.length - 1 ]
console.log( `Opening ${file}` )

if( ! fs.existsSync( file ) ) {
  console.log( 'Please provide the path to the maze file.' )
}

const mazeReader = new MazeReader( file )
const maze = mazeReader.open()

console.log( '------- BEFORE SOLVING --------' )
console.log( maze.toString() )

const mazeSolver = new MazeSolver( maze )
mazeSolver.solve()

console.log( '------- AFTER SOLVING --------' )
console.log( maze.toString() )
