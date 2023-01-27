import React from 'react'
import { useState } from 'react'
import Squares from './Squares'


const Sample = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

 
  const handleClick = (i) => {
    if(condition(squares) || squares[i]) {
        return 
     }
     squares[i] = isX ? 'X' : 'O'
     setSquares(squares)
     setIsX(!isX)
  }

  const condition = (i) => {
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
         const [a,b,c] = winningPattern[i]

         if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
         }
      }
      return null
  }

  const winner = condition(squares)
  let status;

  if(winner) {
    status = `Winner ${winner}`
  }
  else {
    status = `Next move ${isX ? 'X' : 'O'}`
  }

  const renderAll = (i) => {
    return (<Squares  dark={dark} value={squares[i]} onClick={() => handleClick(i)}/>)
   }


  const handleRestart = () => {
     setIsX(true)
     setSquares(Array(9).fill(null))
   }

   //Dark mode setup
   /*First, you need to create a state hook to hold the value of whether the background color is dark or not */
   const [dark, setDark] = useState(false); //set to false first
   /*Second, you need to create an object style which we want to set the backgroundcolor of either light or dark mode */
   const theme = {
    backgroundColor: dark ? '#24252a' : '#0000',
    transition:' all 0.4s ease-in-out'
   }
   //Then the last is we have to create a button that has a onclick function and inside of the function we set the state to dark or light and 
   //vice versa, then put the style on inline
   const setTheme = () => {
     setDark(!dark)
   }
  return (
    <>
     <div className='absolute top-0'><button onClick={setTheme} className='mt-4 ml-5 bg-slate-400 p-2 rounded-md text-white active:bg-slate-300 transition-all'>{dark ? 'Light mode' : 'Dark mode'}</button></div>
    <div style={theme} className='h-screen justify-center items-center flex flex-col'>
        <div className='flex flex-row '>
          {renderAll (0)}
          {renderAll (1)}
          {renderAll (2)}
        </div>
        <div className='flex flex-row '>
          {renderAll (3)}
          {renderAll (4)}
          {renderAll (5)}
        </div>
        <div className='flex flex-row '>
        {renderAll (6)}
          {renderAll (7)}
          {renderAll (8)}
        </div>
      <div className='mt-4 text-3xl transition-all' style={dark  ?  {color: 'white'} : {}}>{status}</div>
     {winner ? (<button onClick={handleRestart} className='w-40 bg-green-500 text-white p-2 mt-4 rounded-md'>Restart</button>) : ('')}
    </div>

  </>
  )
}

export default Sample
