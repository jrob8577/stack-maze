import MazeReader from './maze_reader'
import Stack from './stack'

export default class MazeSolver {
  constructor( maze ) {
    this.maze = maze
  }

  solve( update ) {
    const end = this.maze.end()
    const stack = new Stack()
    const fn = update || ( () => {} )

    stack.push( this.maze.start() )
    this.maze.setPath( stack.peek() )

    while( ! stack.isEmpty() && ! stack.peek().equals( end ) ) {
      fn( stack.peek() )
      const next = this.maze.nextUnvisited( stack.peek() )

      if( next ) {
        // console.log( `next on path is ${next}`)
        this.maze.setPath( next )
        stack.push( next )
      } else {
        // console.log( `visited ${stack.peek()}`)
        this.maze.setVisited( stack.peek() )
        fn( stack.peek() )
        stack.pop()
      }
    }

    fn( end )
  }
}
