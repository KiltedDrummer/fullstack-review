import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

//  for Test rendering purposes, I have some properly formatted mock data
// const mockData = [{"id":18221276,"username":"octocat","repo_name":"git-consortium","updated_at":"2016-12-06T13:06:37Z","description":"This repo is for demonstration purposes only."},{"id":20978623,"username":"octocat","repo_name":"hello-worId","updated_at":"2016-11-06T13:04:55Z","description":"My first repository on GitHub."},{"id":1296269,"username":"octocat","repo_name":"Hello-World","updated_at":"2017-03-03T18:06:03Z","description":"My first repository on GitHub!"},{"id":64778136,"username":"octocat","repo_name":"linguist","updated_at":"2017-02-13T03:05:00Z","description":"Language Savant. If your repository's language is being reported incorrectly, send us a pull request!"},{"id":17881631,"username":"octocat","repo_name":"octocat.github.io","updated_at":"2016-09-28T00:08:24Z","description":null},{"id":1300192,"username":"octocat","repo_name":"Spoon-Knife","updated_at":"2017-03-08T06:00:08Z","description":"This repo is for demonstration purposes only."},{"id":56271164,"username":"octocat","repo_name":"test-repo1","updated_at":"2016-10-09T07:53:15Z","description":null}];

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
      contentType: 'application/json',
      success: () => this.fetch()
    });
  }

  fetch() {
    console.log('fetching New Data');

    $.ajax({
      type:"GET",
      url: 'http://localhost:1128/repos',
      success: (response) => {
        console.log('WE GOTS THE GOODS!', response)
        this.setState({
          repos: response
        });
      }
    });
  }

  onNameClick (e) {
    console.log('add a link here');
  }

  componentDidMount() {
    this.fetch();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={ this.state.repos } linkToGit={ this.onNameClick }/>
      <Search onSearch={ this.search.bind(this) }/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));