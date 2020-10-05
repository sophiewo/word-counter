import React from 'react';

const charComponent = (prop) => {
  const style = {
    display: 'inline-block', 
    textalign: 'center',
    padding: '10px',
    margin: '10px', 
    border: '2px solid black',
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