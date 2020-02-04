import React from 'react';

import githubApi from '../apis/github';
import RepositoriesList from './RepositoriesList';
import { date30DaysAgo } from '../utils/dateManipulations';

class App extends React.Component {

  state = {
    repos: [],
    page: 1,
    isFetching: false
  }

  componentDidMount(){
    this.fetchTrendingRepos(this.state.page);
  }

  componentDidUpdate(prevProp, prevState){
    if(prevState.page != this.state.page)
      this.fetchTrendingRepos(this.state.page);
  }

  async fetchTrendingRepos(page){
    const response = await githubApi.get(`/search/repositories?q=created:>${date30DaysAgo()}&sort=stars&order=desc&page=${page}`);

    this.setState({
      isFetching: false,
      repos: [...this.state.repos, ...response.data.items]
    }) 
  }

  loadMore = () => {
    if(this.state.isFetching === true) return;

    this.setState({
      isFetching: true,
      page: this.state.page + 1
    })
  }

  render(){
    return (
      <div>
        <RepositoriesList repos={this.state.repos} loadMore={this.loadMore}/>
        {this.state.isFetching && <div>Loading...</div>}
      </div>
    );
  }  
}

export default App;
