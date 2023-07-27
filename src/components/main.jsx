import React from "react";
import {Cards} from "../components/cards";

  class Main extends React.Component{
    state = {
      cards: [],
    }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?s=evangelion&apikey=1673431')
    .then(response => response.json())
    .then(data => this.setState({cards: data.Search}))
  }
  
  render(){
    return <main>
      { 
        this.state.cards.length ? (
        <Cards cards = {this.state.cards}/>
        ) : <h3>Loading...</h3>
      }
    </main>   
    }
}

export {Main}