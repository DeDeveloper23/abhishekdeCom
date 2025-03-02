import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const ROWS = 10;
const COLS = 10;
const CELL_SIZE = 40;

// Different cell types
const EMPTY = 0;
const WALL = 1;
const PLAYER = 2;
const GOAL = 3;

// Create a simple maze
const createMaze = () => {
  // Initialize maze with walls
  const maze = Array(ROWS).fill(null).map(() => Array(COLS).fill(WALL));
  
  // Create a simple path through the maze
  // This is a very basic maze - you could make it more complex
  for (let i = 1; i < ROWS - 1; i++) {
    for (let j = 1; j < COLS - 1; j++) {
      // Create some empty paths with a pattern
      if (i % 2 === 1 || j % 2 === 1) {
        maze[i][j] = EMPTY;
      }
    }
  }
  
  // Set player starting position at the top left
  maze[1][1] = PLAYER;
  
  // Set goal at the bottom right and ensure it's visible by making it an empty cell first
  maze[ROWS - 2][COLS - 2] = EMPTY; // First make it empty
  maze[ROWS - 2][COLS - 2] = GOAL; // Then assign it as goal
  
  return maze;
};

export default function NotFound() {
  const [maze, setMaze] = useState<number[][]>([]);
  const [playerPos, setPlayerPos] = useState({ row: 1, col: 1 });
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [lastMoveDirection, setLastMoveDirection] = useState<string | null>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number, y: number } | null>(null);
  const minSwipeDistance = 30; // Minimum distance for a swipe to be detected

  // Initialize maze
  useEffect(() => {
    setMaze(createMaze());
  }, []);

  // Handle player movement logic (shared between keyboard and swipe)
  const movePlayer = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (!gameStarted || gameWon) return;
    
    let newRow = playerPos.row;
    let newCol = playerPos.col;
    
    switch (direction) {
      case 'up':
        newRow--;
        break;
      case 'down':
        newRow++;
        break;
      case 'left':
        newCol--;
        break;
      case 'right':
        newCol++;
        break;
    }
    
    // Check if the move is valid
    if (
      newRow >= 0 && 
      newRow < ROWS && 
      newCol >= 0 && 
      newCol < COLS && 
      maze[newRow][newCol] !== WALL
    ) {
      // Check if player reached the goal
      if (maze[newRow][newCol] === GOAL) {
        setGameWon(true);
      }
      
      // Update the maze
      const newMaze = [...maze];
      newMaze[playerPos.row][playerPos.col] = EMPTY;
      newMaze[newRow][newCol] = PLAYER;
      
      setMaze(newMaze);
      setPlayerPos({ row: newRow, col: newCol });
      setLastMoveDirection(direction);
    }
  }, [maze, playerPos, gameStarted, gameWon]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          movePlayer('up');
          e.preventDefault();
          break;
        case "ArrowDown":
          movePlayer('down');
          e.preventDefault();
          break;
        case "ArrowLeft":
          movePlayer('left');
          e.preventDefault();
          break;
        case "ArrowRight":
          movePlayer('right');
          e.preventDefault();
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movePlayer]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent scrolling when swiping in the game
    if (gameStarted) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    
    const startX = touchStartRef.current.x;
    const startY = touchStartRef.current.y;
    
    const diffX = endX - startX;
    const diffY = endY - startY;
    
    // Check if the swipe was long enough
    if (Math.abs(diffX) < minSwipeDistance && Math.abs(diffY) < minSwipeDistance) return;
    
    // Determine swipe direction
    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (diffX > 0) {
        movePlayer('right');
      } else {
        movePlayer('left');
      }
    } else {
      // Vertical swipe
      if (diffY > 0) {
        movePlayer('down');
      } else {
        movePlayer('up');
      }
    }
    
    touchStartRef.current = null;
  };

  // Focus the game area when the game starts
  useEffect(() => {
    if (gameStarted && gameRef.current) {
      gameRef.current.focus();
    }
  }, [gameStarted]);

  const resetGame = () => {
    setMaze(createMaze());
    setPlayerPos({ row: 1, col: 1 });
    setGameWon(false);
    setLastMoveDirection(null);
  };

  const startGame = () => {
    setGameStarted(true);
    resetGame();
  };

  // Get dynamic cell size based on viewport width for responsive grid
  const getCellSize = () => {
    // For very small screens, make cells smaller
    if (typeof window !== 'undefined' && window.innerWidth < 400) {
      return Math.floor((window.innerWidth - 60) / COLS); // Subtract padding
    }
    return CELL_SIZE;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E6D3] via-[#A69F98] to-[#E2A378] p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 md:mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">404</h1>
        <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-800">Oops! You've ventured into uncharted territory</p>
        <p className="text-md md:text-lg mb-2 md:mb-4 text-gray-700">
          {gameWon 
            ? "Congratulations! You found your way out!" 
            : "Find your way out of the maze to return to civilization"}
        </p>
      </motion.div>

      <Card className="w-full max-w-xl bg-white/20 backdrop-blur-md border-none shadow-xl">
        <CardContent className="p-4 md:p-6">
          <div 
            ref={gameRef}
            tabIndex={0}
            className="w-full aspect-square mx-auto relative outline-none touch-none"
            style={{ 
              display: "grid", 
              gridTemplateRows: `repeat(${ROWS}, ${getCellSize()}px)`,
              gridTemplateColumns: `repeat(${COLS}, ${getCellSize()}px)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {gameStarted ? (
              maze.map((row, rowIndex) => 
                row.map((cell, colIndex) => (
                  <motion.div
                    key={`${rowIndex}-${colIndex}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: (rowIndex + colIndex) * 0.01 // Faster animation for mobile
                    }}
                    className={`
                      ${cell === WALL ? 'bg-[#8B7E74] border-[#A69F98]' : 'bg-transparent'}
                      ${cell === PLAYER ? 'bg-[#E2A378] rounded-full' : ''}
                      ${cell === GOAL ? 'bg-[#5D9C59] border-green-400 animate-pulse' : ''}
                      border border-[#D2C0A0]/40
                    `}
                  />
                ))
              )
            ) : (
              <div className="col-span-full row-span-full flex items-center justify-center">
                <Button 
                  onClick={startGame}
                  className="bg-[#E2A378] hover:bg-[#D58C60] text-gray-900 px-6 py-4 md:px-8 md:py-6 text-lg"
                >
                  Start Adventure
                </Button>
              </div>
            )}
          </div>

          {gameStarted && (
            <div className="mt-3 flex justify-center">
              {lastMoveDirection && (
                <div className="text-gray-800 text-sm">
                  Last move: <span className="font-medium capitalize">{lastMoveDirection}</span>
                </div>
              )}
            </div>
          )}

          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            {gameStarted && (
              <Button 
                onClick={resetGame}
                className="bg-[#A69F98] hover:bg-[#8B8580] text-gray-900 w-full sm:w-auto"
              >
                Reset Maze
              </Button>
            )}
            
            <Link href="/">
              <Button className="bg-[#E2A378] hover:bg-[#D58C60] text-gray-900 w-full sm:w-auto">
                Return Home
              </Button>
            </Link>
          </div>

          {gameStarted && (
            <div className="mt-3 md:mt-4 text-center text-sm text-gray-800">
              <p className="mb-1">
                <span className="hidden sm:inline">Use arrow keys or </span>
                <span className="sm:hidden">Swipe </span>
                to navigate the maze
              </p>
              <p className="mt-1">🟠 You | 🟢 Goal | ⬛ Wall</p>
            </div>
          )}

          {gameWon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-3 md:mt-4 p-3 bg-[#5D9C59]/20 rounded-md text-center"
            >
              <p className="font-bold text-gray-900">You've escaped the 404 maze!</p>
              <p className="text-sm mt-1 text-gray-800">Maybe getting lost wasn't so bad after all</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
