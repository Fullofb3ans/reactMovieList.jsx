import React from "react";
import {Cards} from "../components/cards";
import {Preloader} from "../components/preloader";
import {Search} from "../components/Search";

  class Main extends React.Component{
    state = {
      cards: [],
    }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?s=evangelion&apikey=1673431')
    .then(response => response.json())
    .then(data => this.setState({cards: data.Search}))
  }
  
  searchUpdate = (search) => {
    this.setState({cards: []})
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=1673431`)
    .then(response => response.json())
    .then(data => this.setState({cards: data.Search}))
  }
    
  

  render(){
    return <main>
      <Search su = {this.searchUpdate}/>
      { 
        this.state.cards.length ? (
        <Cards cards = {this.state.cards}/>
        ) : <div className="placeForPreloader"> <Preloader/></div>
      }
    </main>   
    }
  }

export {Main}