# Maze Solver with a Stack

Consider a maze made up of a rectangular array of squares.  The maze will contain a character (either +, -, or |) to represent a blocked square, and to form the walls of the maze.  Mazes will have only one entrance at the Coordinate (0, 1), where the origin is at the upper left hand corner, with only one exit in the lower right hand corner of the maze.

```
11
11
+-+-+-+-+-+
    |     |
+-+ + +-+ +
|   |   | |
+ +-+-+ + +
|   |   | |
+-+ + +-+ +
| |   |   |
+ +-+-+ +-+
|
+-+-+-+-+-+
```
Maze generated with a [Maze Generator](http://www.delorie.com/game-room/mazes/genmaze.cgi), with the dimensions added on the first two lines in the order height, width.

Beginning at the entrance to the maze, find a path to the exit at the bottom right of the maze.  You may only move up, down, left, and right.  Each square in the maze can be in one of four states: clear (space), blocked (X), path (.), or visited (*).  Initially, after the maze has been read in from the file, each square will be either clear or blocked.  If a square lies on a successful path, mark it with a period.  If you visit a square but it does not lead to a successful path, mark it as visited with an asterisk.

### Goal
* Maze file should be read in with a `MazeReader`, and used to instantiate a `Maze` object
* A `MazeSolver` should take a `Maze` instance, and find a path through the maze

### UML
| Coordinate            |
|-----------------------|
| + constructor( x, y ) |

| Maze                           |
|--------------------------------|
| + constructor( height, width ) |
| + setBlocked( coordinate )     |
| + setVisited( coordinate )     |
| + setPath( coordinate )        |
| + at( coordinate )             |
| + clearAround( coordinate )    |
| + start()                      |
| + end()                        |
| + toString()                   |

| MazeReader                |
|---------------------------|
| + constructor( filename ) |
| + open()                  |


| MazeSolver            |
|-----------------------|
| + constructor( maze ) |
| + solve()             |
