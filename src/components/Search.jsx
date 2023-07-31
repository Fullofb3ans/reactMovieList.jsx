import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  };

  searchUpdateByEnter = (e) => {
    if (e.code === 'Enter') {
      this.props.su(this.state.search);
    }
  };

  render() {
    return (
      <div className='row ' onKeyDown={this.searchUpdateByEnter}>
        <div className='searchPlace '>
          <input
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            id='search'
            type='text'
            className='validate'
            placeholder='Search'
          />

          <button
            onClick={() => this.props.su(this.state.search)}
            className='btn waves-effect deep-purple lighten-1'
            id='Search'
          >
            Search
          </button>
        </div>

        <div className='radios'>
          <label>
            <input
              name='group1'
              type='radio'
              onClick={() => this.props.fbr('')}
              defaultChecked
            />
            <span>all</span>
          </label>

          <label>
            <input
              onClick={() => this.props.fbr('movie')}
              name='group1'
              type='radio'
            />
            <span>movies</span>
          </label>
          <label>
            <input
              onClick={() => this.props.fbr('series')}
              name='group1'
              type='radio'
            />
            <span>series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
