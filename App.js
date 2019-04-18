import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'

//basically the background of the project, put all the form and table in here, and then add this file to index.js
class App extends Component {
  state = {
	  characters:[]
  };
  render() {
	const {characters} = this.state;
	  
    return (
      <div className="container">
		<Table characterData={characters} removeCharacter = {this.removeCharacter}/>
		  <Form handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
	removeCharacter = index => {  //remember that the functions must be written within a class
		const { characters } = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index
			}),
		})
	}

	handleSubmit = character=>{
		this.setState({characters:[...this.state.characters,character]})
	}

}




export default App
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
