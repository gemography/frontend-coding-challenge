import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import Card from '../components/Card';
import styles from './repoPage.module.css';
import { RootStoreContext } from '../store/root/store';
import { getPreviousDateFromDays } from '../store/utils/dateUtils';
import { GithubRepoType, OrderBy } from '../store/githubRepo';
import useInfiniteScroll from '../Hooks/useInfiniteScroll';

const IntialPage = 1;
const RepoPage = observer(() => {
  const { githubRepoStore } = useContext(RootStoreContext);
  const [currentPage, setCurrentPage] = useState(IntialPage);
  const loadMore = () => {
    console.log('load more');
    setCurrentPage(currentPage + 1);
    setIsFetching(false);
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(loadMore);
  useEffect(() => {
    const dateFrom30Days = getPreviousDateFromDays(30);
    githubRepoStore.load({
      page: currentPage,
      date: dateFrom30Days,
      order: OrderBy.ASC,
    });
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}> Most starred Repos in last 30 days</h1>
      {githubRepoStore.repos?.map((item: GithubRepoType) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
});

export default RepoPage;
