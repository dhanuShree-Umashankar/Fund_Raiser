import React from 'react'

const ButtonRepo = ({txt, style, click}) => {
  return (
    <button type='submit' onClick={click} className={`${style}`}>{txt}</button>
  )
}

export default ButtonRepo