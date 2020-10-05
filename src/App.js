import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComp/ValidationComp';
import CharComponent from './CharComp/CharComp';

class App extends Component {

  state = {
    text: '',
    showInstructions: false
  }

  changeParaHandler = (event) => {
    this.setState( {
      text: event.target.value,
      textLength: event.target.value.length
    })
  };

  toggleShowInstructions = () => {
    const doesShow = this.state.showInstructions;
    console.log(doesShow)
    this.setState({ showInstructions: !doesShow})
  }

  deleteCharHandler = (index) => {
    const splitText = this.state.text.split('');
    splitText.splice(index, 1);
    const updatedText = splitText.join('');
    this.setState({text: updatedText})
  }

  render() {

    const charList = this.state.text.split('').map((char, index) => {
      return <CharComponent 
        character={char} 
        key={index} 
        clicked={() =>this.deleteCharHandler(index)}/>
    })

    let instructions = null;

    if (this.state.showInstructions === true) {
      instructions = (
      <div className="Instructions" >
        <h2> Requirements: </h2>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a text).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>

        <h3>Extras: </h3>
          <ol>
            <li> Character length only appears on typing in the input box</li>
            <li> Show Requirement's button changes to hide Requirements on toggle</li>
            <li> Styling for list, place on card </li>
          </ol>
      </div>
      )
    }

  

    return (
      <div className="App">
        <h2> Enter some text below</h2>
        <input type="text"  onChange={this.changeParaHandler} value={this.state.text} />
        <p> {this.state.text} </p>
        <ValidationComponent
          textLength={this.state.text.length} />
        {charList}
        <div className="instructionsBackground">
        <hr />
        <button
          onClick={this.toggleShowInstructions}>
       
          Show Requirements
        </button>
     
        {instructions}
      </div>
      </div>
    );
  }
}

export default App;
