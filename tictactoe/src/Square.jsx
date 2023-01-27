import React from 'react'

const Square = ({ value, click }) => {
  return (
    <div className=''>
      <button onClick={click} className='w-24 text-lg font-bold h-24 p-4 bg-slate-200 border border-gray-800'>
        {value}
      </button>
    </div>
  )
}

export default Square
