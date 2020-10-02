import React from 'react';

// Create a new component (=> ValidationComponent) which receives the text length as a prop 

const validationComponent = (prop) => {
  return (
    <div className="ValidationComp">
      <p> The length of your text is: {prop.textLength} characters</p>
    </div>
  )
}

export default validationComponent;