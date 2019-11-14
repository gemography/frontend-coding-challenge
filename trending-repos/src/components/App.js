import React, { useEffect, useState } from 'react';

import githubApi from '../apis/github';
import RepositoriesList from './RepositoriesList';
import Spinner from './Spinner';
import { calcAndFormatDate } from '../utils/calcAndFormatDate';

function App() {

  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchTrendingRepos();
  }, []);

  useEffect(() => {
    fetchTrendingRepos();
  }, [page]);

  async function fetchTrendingRepos(){
    const response = await githubApi.get(`/search/repositories?q=created:>${calcAndFormatDate()}&sort=stars&order=desc&page=${page}`);

    setRepos([...repos, ...response.data.items]);
    setIsFetching(false); 
  }

  function loadMore() {
    setIsFetching(true);
    setPage(page + 1);
    console.log(page);
  }

  return (
    <div>
      <RepositoriesList repos={repos} loadMore={loadMore}/>
      {isFetching && <Spinner />}
    </div>
  );
  
}

export default App;
