import React from 'react'

const Squares = ({value, onClick}) => {
  return (
    <div>
      <button className='w-24 text-lg font-bold h-24 p-4 bg-slate-200 border border-gray-800' onClick={onClick}>{value}</button> 
    </div>
  )
}

export default Squares
