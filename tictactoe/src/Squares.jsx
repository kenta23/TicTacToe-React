import React from 'react'

const Light = {
  backgroundColor: '#363636',
  color: 'white',
  transition: 'all 0.4s ease-in-out',
  border: '1px solid white'
}
const Squares = ({value, onClick, dark}) => {
  return (
    <div>
      <button style={dark ? Light : {}} className={`w-24 text-lg font-bold h-24 p-4  border border-gray-800`} onClick={onClick}>{value}</button> 
    </div>
  )
}

export default Squares
