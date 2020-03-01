import React from "react";
import CreateCard from "../components/CreateCard";

class MainContainer extends React.Component {
  state = {
    cards: []
  };

  createNewCard = input => {
    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: input
      })
    })
      .then(resp => resp.json())
      .then(newCard => {
        this.setState({
          cards: [...this.state.cards, newCard]
        });
      });
  };

  render() {
    return (
      <div className="main-container">
        <CreateCard createNewCard={this.createNewCard} />
      </div>
    );
  }
}

export default MainContainer;
