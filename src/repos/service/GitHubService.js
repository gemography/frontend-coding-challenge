import Axios from "axios";





export const GITHUB_URL = "https://api.github.com/search/repositories";


const date = "2019-11-13";
const per_page = 10;

class GitHubService {
    getAllRepos(page) {
        return Axios.get(GITHUB_URL+"?q=created:>"+date+"&sort=stars&order=desc&page="+page+"&per_page="+per_page);
    }


}



export default new GitHubService();