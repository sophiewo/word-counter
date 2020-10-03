import React from 'react';

const charComponent = (prop) => {
  const style = {
    display: 'inline-block', 
    padding: '16px', 
    textalign: 'center', 
    margin: '16px', 
    border: '1px solid black'
  }

const array = prop.text.split('')

  return (
    <div >
      {array.map((char) => (
        <div style={style}> {char} </div>
      ))}
    </div>
  )
}

export default charComponent;