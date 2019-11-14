import Axios from "axios";





export const GITHUB_URL = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2&per_page=10";





class GitHubService {
    getAllRepos() {
        return Axios.get(GITHUB_URL);
    }


}



export default new GitHubService();