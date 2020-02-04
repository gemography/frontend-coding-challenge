import React, { useEffect } from 'react';

import Repository from './Repository';

function RepositoriesList({repos, loadMore}) {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if ((window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight) return;
        loadMore();
      }

    return(
        <div>
            {repos.map(repo => <Repository key={repo.id} repo={repo}/>)}
        </div>
    );
}

export default RepositoriesList;