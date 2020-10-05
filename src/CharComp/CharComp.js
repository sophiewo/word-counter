import React from 'react';

const charComponent = (props) => {
  const style = {
    display: 'inline-block', 
    textalign: 'center',
    padding: '10px',
    margin: '10px', 
    border: '2px solid black',
  }


  return (
    <div style={style} onClick={props.clicked}> 
      {props.character} 
    </div>

  )
}

export default charComponent;