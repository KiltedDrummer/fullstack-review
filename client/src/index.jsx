import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: JSON.stringify({query: term}),
      dataType: 'application/json',
      success: () => this.fetch().bind(this)
    });
  }

  fetch() {
    console.log('fetching New Data');

    $.ajax({
      type:"GET",
      url: 'http://localhost:1128/repos',
      success: (respose) => {
        this.setState({
          repos: respose
        });
      }
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));