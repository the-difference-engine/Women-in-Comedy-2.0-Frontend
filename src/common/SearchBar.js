import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

class SearchBar extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      term: '',
      autoCompleteResults: [],
      itemSelected: {},
      loading: false,
      rsultts: []
    };
    axios.get('/search?q=' + this.state.term)
      .then(response => this.setState({ autoCompleteResults: response.data }))
  }

  getAutoCompleteResults(e){
    if (e.target.value === '') {
      this.setState({
        term: '',
        autoCompleteResults: []
      });
    } else {
      this.setState({
        term: e.target.value
      }, () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + 'users/search?q=' + this.state.term)
          .then(response => this.setState({ autoCompleteResults: response.data }))
      });
    }
  }

  


    render(){
      let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
        return <div key={index}>
          <h4>{response.first_name } {response.last_name}</h4>
          
        </div>
      });

      return (
        <div>
          <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type="text" placeholder="Search..." autoComplete="off" />
          { autoCompleteList }
        </div>
      )
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <SearchBar />,
      document.body.appendChild(document.createElement('div')),
    )
  });

export {SearchBar};