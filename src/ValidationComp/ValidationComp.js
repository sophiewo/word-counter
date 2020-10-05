import React from 'react';

// Create a new component (=> ValidationComponent) which receives the text length as a prop

//Inside theValidationComponent, either output "Text too short" or "Text long enough" depending on the text length(e.g.take 5 as a minimum length)

const validationComponent = (prop) => {
  let textReturn = "bang on point";
  if (prop.textLength < 5) {
    textReturn = "too short"  
  } else if (prop.textLength > 20) {
    textReturn = "too long"
  }

  return (
    <div className="ValidationComp">
      <p> The length of your text is {prop.textLength} characters which is {textReturn} </p>
    </div>
  )
}

export default validationComponent;