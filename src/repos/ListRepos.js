import React, { Component } from 'react';
import Repo from './Repo';

class ListRepos extends Component {
    items = [
        {
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        },
        {
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        }, {
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        }, {
            "name": "copypaster",
            "description": "Let's make copy/paste-able web forms with eReceipts the standard",
            "stargazers_count": 11,
            "open_issues_count": 1,
            "pushed_at": "2019-11-13T03:15:40Z",
            "owner": {
                "avatar_url": "https://avatars0.githubusercontent.com/u/51207659?v=4"
            },
        }];
    render() {
        return (
            this.items.map((repo) => 
                <Repo />
            )
        );
    }
}

export default ListRepos;