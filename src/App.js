import React, { Component } from "react";
import './App.css';
import NavTab from './components/Navbar';
import JumbotronBox from './components/Jumbotron';
import ImageCards from './components/ImageCards';
import characters from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <NavTab />
        <JumbotronBox />
        {this.state.characters.map(character => (
          <ImageCards
            image={character.image}
            key={character.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
