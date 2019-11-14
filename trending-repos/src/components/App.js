import React from 'react';

import githubApi from '../apis/github';
import RepositoriesList from './RepositoriesList';

class App extends React.Component{
  state = {
    repos: []
  }

  calcAndFormatDate(){
    const date = new Date();
    date.setDate(date.getDate() - 30);

    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    
    return `${year}-${month}-${day}`;
  }

  async fetchTrendingRepos(){
    const response = await githubApi.get(`/search/repositories?q=created:>${this.calcAndFormatDate()}&sort=stars&order=desc`);

    this.setState({
      repos: response.data.items
    });
  }

  componentDidMount(){
    this.fetchTrendingRepos();
  }

  render(){
    return (
      <div>
        <RepositoriesList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
