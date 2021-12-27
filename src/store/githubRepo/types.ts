
export interface GithubRepoType {
    owner:string;
    name:string;
    description:string;
    has_issues:boolean;
    open_issues_count:string;
    stargazers_count:string;
    created_at:string;
}

export interface GithubRepoInputOptions {
    date:string;
    sort: string;
    order: string;
    page: number|1;

  }