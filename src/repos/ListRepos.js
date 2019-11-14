import React, { Component } from 'react';
import Repo from './Repo';
import GitHubService from './service/GitHubService';

class ListRepos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
        }
    }
    componentDidMount() {
        GitHubService.getAllRepos()
            .then(res => { return res.data; })
            .then(json => {
                console.log(json.items);
                this.setState({
                    isLoaded: true,
                    items: json.items,
                })
            }).catch(() => {
                alert("cannot load the list of repositories");
            });
    }
    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {

            return <div>Loading...</div>

        }
        else {
            return (
                items.map((current) =>
                    <Repo key={current.id} repo={current} />
                )
            );
        }
    }
}

export default ListRepos;