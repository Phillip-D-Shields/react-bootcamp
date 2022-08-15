// display an individual die, use props to show the correct face

import React from 'react'

const Die = ({count, rolling}) => {


  return (
    <i className={`dice fa-solid fa-dice-${count} fa-2xl ${rolling && 'rolling'}`}></i>
  )
}

export default Die