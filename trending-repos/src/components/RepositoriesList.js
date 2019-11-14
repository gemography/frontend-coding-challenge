import React from 'react';

import Repository from './Repository';

function RepositoriesList({repos}) {
    return(
        <div>
            {repos.map(repo => <Repository repo={repo}/>)}
        </div>
    );
}

export default RepositoriesList;