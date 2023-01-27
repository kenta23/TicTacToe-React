import { useState } from 'react'
import { render } from 'react-dom';
import Square from './Square'


function App() {
   const [squares, setSquare] = useState(Array(9).fill(null));
   const [value, setValue] = useState(true);
   let status;

   function handleClick(i) {
    if(winCondition(squares) || squares[i]) {
      return 
    }
     squares[i] = value ? 'X' : 'O'
     setSquare(squares)
     setValue(!value)
   }

  const winCondition = (square) => {
    const winningPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i = 0; i < winningPattern.length; i++) {
      const [a,b,c] = winningPattern[i] //each index 

      if(square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a]
      } 
     
     
    }
     return null
  }

  const winner = winCondition(squares)
  if(winner) {
     status = `Winner ${winner}!`
  }
  else {
    status = `Next Move ${value ? 'X' : 'O'}`
  }
  
  const renderSquare = (items) => {
    return (<Square value={squares[items]} click={() => handleClick(items)}/>)
  }

  const restart = () => {
    setValue(true)
    setSquare(Array(9).fill(null))
  }

  return (
    <div className="App flex flex-col h-screen justify-center items-center bg-gray-800 select-none">
       <div className='flex flex-row'>
          {renderSquare (0)}
          {renderSquare (1)}
          {renderSquare (2)}
       </div>
       <div className='flex flex-row'>
          {renderSquare (3)}
          {renderSquare (4)}
          {renderSquare (5)}
       </div>
       <div className='flex flex-row'>
          {renderSquare (6)}
          {renderSquare (7)}
          {renderSquare (8)}
       </div>
       <div className='mt-6 text-2xl font-semibold text-white'>{status}</div>
     {winner ? (<button className='p-2 bg-blue-600 text-white w-52 rounded-md mt-4 ' onClick={restart}>Restart</button>) : ('')}  
    </div> 
  )
}

export default App
