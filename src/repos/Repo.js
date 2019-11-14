import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Repo({ repo }) {

    return (
        <div className="row">
            <div className="photo">
                <img alt="" className="img" src={repo.owner.avatar_url} />
            </div>
            <div className="content">
                <h1>{repo.name}</h1>
                <p>{repo.description}</p>
                <div>
                    <span className="stars">
                        <FontAwesomeIcon className="yellow" icon={faStar} /> 
                        Stars: {format_number(repo.stargazers_count)}
                    </span>
                    <span className="issues">Issues: {format_number(repo.open_issues_count)}</span>
    <span className="date">Submitted {diff_in_days(repo.pushed_at)} days ago by {repo.owner.login}</span>
                </div>

            </div>
        </div>
    );
}
function format_number(number){
    return number <= 1000? number : (number/1000)+"k";
}
function diff_in_days(date) {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export default Repo;

