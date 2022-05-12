import React from 'react'
import './TextError.css'

const TextError = (props) => {
  return (
    <span className='red-text'>{props.children}</span>
  )
}

export default TextError