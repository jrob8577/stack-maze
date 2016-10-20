import { expect } from 'chai'
import Maze from '../src/maze'
import Coordinate from '../src/coordinate'

describe( 'Maze', () => {
  describe( 'constructor', () => {
    it( 'creates an array to hold the maze', () => {
      const maze = new Maze( 2, 2 )

      expect( maze.maze ).to.be.instanceof( Array )
    })

    it( 'initializes each entry in the array to " "', () => {
      const maze = new Maze( 2, 2 )

      const mazeRepresentation = maze.maze.reduce( (memo, rowEntry) => {
        return memo + rowEntry.reduce( (innerMemo, columnEntry) => {
          return innerMemo + columnEntry
        }, "" )
      }, "" )

      expect( mazeRepresentation ).to.equal( "    " )
    })


    it( 'stores the height', () => {
      const height = 10
      const maze = new Maze( height, 2 )

      expect( maze.height ).to.equal( height )
    })


    it( 'stores the width', () => {
      const width = 10
      const maze = new Maze( 2, width )

      expect( maze.width ).to.equal( width )
    })

  })

  describe( '#setBlocked', () => {
    it( 'sets the specified Coordinate to X', () => {
      const maze = new Maze( 2, 2 )
      const coordinate = new Coordinate( 1, 1 )

      maze.setBlocked( coordinate )

      expect( maze.maze[ 1 ][ 1 ] ).to.equal( 'X' )
    })
  })

  describe( '#setVisited', () => {
    it( 'sets the specified Coordinate to *', () => {
      const maze = new Maze( 2, 2 )
      const coordinate = new Coordinate( 1, 1 )

      maze.setVisited( coordinate )

      expect( maze.maze[ 1 ][ 1 ] ).to.equal( '*' )
    })
  })

  describe( '#setPath', () => {
    it( 'sets the specified Coordinate to .', () => {
      const maze = new Maze( 2, 2 )
      const coordinate = new Coordinate( 1, 1 )

      maze.setPath( coordinate )

      expect( maze.maze[ 1 ][ 1 ] ).to.equal( '.' )
    })
  })

  describe( '#at', () => {
    it( 'returns the character at the specified Coordinate', () => {
      const maze = new Maze( 2, 2 )
      const coordinate = new Coordinate( 1, 1 )

      maze.setPath( coordinate )

      expect( maze.at( coordinate )).to.equal( '.' )
    })
  })

  describe( '#nextUnvisited', () => {
    it( 'returns a Coordinate', () => {
      const maze = new Maze( 2, 2 )
      const clear = maze.nextUnvisited( new Coordinate( 0, 0 ))

      expect( clear ).to.be.an.instanceof( Coordinate )
    })

    it( 'returns null if there are no clear spaces', () => {
      const maze = new Maze( 2, 2 )

      maze.setPath( new Coordinate( 0, 0 ))
      maze.setPath( new Coordinate( 0, 1 ))
      maze.setPath( new Coordinate( 1, 0 ))
      maze.setPath( new Coordinate( 1, 1 ))

      expect( maze.nextUnvisited( new Coordinate( 0, 0 )) ).to.be.undefined
    })

    it( 'returns a valid Coordinate of a clear space', () => {
      const maze = new Maze( 2, 2 )

      maze.setPath( new Coordinate( 0, 0 ))
      maze.setPath( new Coordinate( 0, 1 ))
      // Intentionally omitting (1, 1) since diagonal is not valid

      expect( maze.nextUnvisited( new Coordinate( 0, 0 )) )
        .to.have.all.keys({ x: 1, y: 0 })
    })

  })

  describe( '#start', () => {
    it( 'returns a Coordinate', () => {
      const maze = new Maze( 2, 2 )

      expect( maze.start() ).to.be.an.instanceof( Coordinate )
    })

    it( 'returns the correct starting Coordinate', () => {
      const maze = new Maze( 2, 2 )
      const start = maze.start()

      expect( start ).to.have.all.keys({ x: 1, y: 0 })
    })
  })

  describe( '#end', () => {
    it( 'returns a Coordinate', () => {
      const maze = new Maze( 2, 2 )

      expect( maze.end() ).to.be.an.instanceof( Coordinate )
    })

    it( 'returns the correct ending Coordinate', () => {
      const maze = new Maze( 2, 2 )
      const end = maze.end()

      expect( end ).to.have.all.keys({ x: 1, y: 0 })
    })
  })

  describe( '#toString', () => {
    it( 'returns a String', () => {
      const maze = new Maze( 2, 2 )

      expect( maze.toString() ).to.be.a( 'string' )
    })

    it( 'returns a String representation of the Maze', () => {
      const maze = new Maze( 2, 2 )

      maze.setPath( new Coordinate( 0, 0 ))
      maze.setBlocked( new Coordinate( 0, 1 ))
      maze.setVisited( new Coordinate( 1, 0 ))
      maze.setPath( new Coordinate( 1, 1 ))

      const expected =
        "  0 1\n" +
        "0 . X\n" +
        "1 * ."

      expect( maze.toString() ).to.equal( expected )
    })
  })
})
