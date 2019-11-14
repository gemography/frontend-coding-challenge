import React from 'react';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Repo from './Repo';
import GitHubService from './service/GitHubService';

let page = 0;

function ListRepos() {

    const [items, setItems] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const [totalCount, setTotalCount] = useState(0);

    const getNewRepos = async () => {
        page++;
        const response = await GitHubService.getAllRepos(page);
        console.log(response);
        setItems(items.concat(response.data.items));
        setTotalCount(response.data.total_count);
        setInitialized(true);
    }
    useEffect(() => {
        if (!initialized) {
            getNewRepos();
        }
    });

    return (
            <InfiniteScroll
                pageStart={page}
                loadMore={getNewRepos}
                hasMore={totalCount > items.length}
            >
                {items.map((current) =>
                    <Repo key={current.id} repo={current} />
                )}
            </InfiniteScroll>
    );

    
}

export default ListRepos;