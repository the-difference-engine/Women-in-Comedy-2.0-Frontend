import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import { Link, Route } from 'react-router-dom';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      autoCompleteResults: [],
      itemSelected: {},
      showItemSelected: false
    }
  }

  componentWillReceiveProps() {
    this.setState({
      term: '',
      autoCompleteResults: []
    });
  }

  getAutoCompleteResults(e) {
    if (e.target.value === "") {
      this.setState({
        term: '',
        autoCompleteResults: []
      });
      return;
    } else {
      this.setState({
        term: e.target.value
      }, () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + 'users/search?q=' + this.state.term)
          .then(response => this.setState({ autoCompleteResults: response.data }))
      });
    }
  }
  render() {
    let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div className='searchbox'><div className="navsearch" key={index}>
        <div className="navul" >
          <div className="navli"> <Link to={'/profile/' + response.id} className="searchlink" style={{ color: 'black' }} >{response.first_name} {response.last_name}</Link> </div>
        </div>
      </div>
      </div>
    });

    return (
      <div>
        <input style={{ width: "89%" }} ref={(input) => { this.searchBar = input }} value={this.state.term} onChange={this.getAutoCompleteResults.bind(this)} type="text" placeholder="Search" autoComplete="off" />
        {autoCompleteList}
      </div>
    )
  }

}


export { SearchBar };