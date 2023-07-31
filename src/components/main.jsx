import React from 'react';
import { Cards } from '../components/cards';
import { Preloader } from '../components/preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    cards: [],
    filter: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`http://www.omdbapi.com/?s=evangelion&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data.Search, loading: false }));
  }

  searchUpdate = (search) => {
    this.setState({ cards: [], loading: true });
    try {
      fetch(
        `http://www.omdbapi.com/?s=${search}&type=${this.state.filter}&apikey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          data.Response === 'True'
            ? this.setState({ cards: data.Search, loading: false })
            : this.setState({ cards: [], loading: false })
        );
    } catch (error) {
      console.log('error');
    }
  };

  filterByRadio = (str) => {
    this.setState({ filter: str });
  };

  render() {
    return (
      <main>
        <Search su={this.searchUpdate} fbr={this.filterByRadio} />
        {this.state.cards.length === 0 && this.state.loading === false ? (
          <div className='empty'>
            <h3>Nothing found</h3>
          </div>
        ) : (
          <h1></h1>
        )}
        {this.state.loading === true ? (
          <div className='placeForPreloader'>{<Preloader />}</div>
        ) : (
          <Cards cards={this.state.cards} />
        )}
      </main>
    );
  }
}

export { Main };
