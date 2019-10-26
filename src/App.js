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

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <NavTab />
        <JumbotronBox count={this.state.count}/>
        {this.state.characters.map(character => (
          <ImageCards
            image={character.image}
            key={character.id}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default App;
