import React from 'react';

const charComponent = (props) => {
  style = {
    display: inline-block, 
    padding: 16px, 
    text-align: center, 
    margin: 16px, 
    border: 1px solid black
  }

  return (
    <div style={style} >
      Hello
    </div>
  )
}

export default charComponent;