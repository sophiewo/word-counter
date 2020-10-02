import React from 'react';

const charComponent = (prop) => {
  const style = {
    display: 'inline-block', 
    padding: '16px', 
    textalign: 'center', 
    margin: '16px', 
    border: '1px solid black'
  }



  return (
    <div style={style}>
      {prop.text}
    </div>
  )
}

export default charComponent;