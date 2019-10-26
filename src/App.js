import React, { Component } from "react";
import './App.css';
import NavTab from './components/Navbar';
import JumbotronBox from './components/Jumbotron';
import ImageCards from './components/ImageCards';
import characters from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    count: 0
  };

  handleIncrement = (id) => {
    //Loop through characters array
    this.state.characters.find((character, el) => {
      //Find id of image clicked 
      if (character.id === id) {
        //If it has not been clicked: set chosen true, count+1, shuffle
        if (characters[el].chosen === false) {
          this.setState({ count: this.state.count + 1 });
          this.shuffleCharacters(characters);
          characters[el].chosen = true;
        }
        //If it has been clicked: new game
        else {
          this.newGame();
        }
      }
    });
  };

  shuffleCharacters = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  newGame = () => {
    // set all heroes.clicked = false
    this.state.characters.forEach(character => character.chosen = false)
    // set count back to 0 
    this.setState({ count: 0 });
    return true;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <NavTab />
        <JumbotronBox count={this.state.count} />
        {this.state.characters.map(character => (
          <ImageCards
            image={character.image}
            key={character.id}
            id={character.id}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default App;
