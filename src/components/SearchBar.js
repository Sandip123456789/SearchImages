import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //** callback function */
  //** Assigning arrow function to prevent the error in console */
  onFormSubmit = (event) => {
    event.preventDefault();

    //** onSubmit is a props of SearchBar coming from App component */
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Pics</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
