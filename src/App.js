import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css'; // import the CSS

class App extends Component { // Component is a property of React library.
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // Mounting is when React puts our component on the page for the first time.
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')  // Fetch some sample users.
      .then (response => response.json())               // Convert the users to JSON format.
      .then (users => this.setState({monsters: users})); // Update the users in our state.
  } 

  // Write class methods with arrow syntax!
  handleChange = e => {       // handleChange method points to an arrow function.
    this.setState({searchField: e.target.value}); // "this" is automatically binded
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='Search Monsters:'
          handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
