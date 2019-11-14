import React, { Component } from 'react';
import Repo from './Repo';

class ListRepos extends Component {
    items = [
        {
            "id":1,
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "login": "treenotation",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        },
        {
            "id":2,
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "login": "treenotation",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        }, {
            "id":3,
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "login": "treenotation",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        }, {
            "id":4,
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "login": "treenotation",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        }];
    render() {
        return (
            this.items.map((current) => 
                <Repo key={current.id} repo={current} />
            )
        );
    }
}

export default ListRepos;