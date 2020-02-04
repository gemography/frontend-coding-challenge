import React from 'react';

import '../styles/Repository.css';
import { numberOfDaysSinceRepoCreation } from '../utils/dateManipulations';

function Repository({repo}){
    const {name, owner, description, stargazers_count, open_issues_count, created_at} = repo;
    return (
      <div className="repo">
          <div className="owner-avatar">
              <img src={owner.avatar_url} />
          </div>
          <div className="repo-info">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="repo-stats">
                <div>Stars: {stargazers_count}</div>
                <div>Issues: {open_issues_count}</div>
                <p>Submitted {numberOfDaysSinceRepoCreation(created_at)} days ago by {owner.login}</p>
            </div>
          </div>
      </div>
    );
}

export default Repository;