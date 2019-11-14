import React from 'react';

import './Repository.css';

function Repository({repo}){
    const {name, owner, description, stargazers_count, open_issues_count} = repo;
    return (
      <div className="repo">
          <div className="owner-avatar">
              <img src={owner.avatar_url} />
          </div>
          <div className="repo-info">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="repo-stats">
                <p>Stars: {stargazers_count}</p>
                <p>Issues: {open_issues_count}</p>
                <p>Submitted 30 days ago by tensorflow</p>
            </div>
          </div>
      </div>
    );
}

export default Repository;