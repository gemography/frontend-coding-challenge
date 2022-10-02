export type GithubRepoResponseType = {
  total_count: number;
  items: GithubRepoType[];
  incomplete_results: boolean;
};
type owner = {
  avatar_url: string;
};
export type GithubRepoType = {
  id: number;
  name: string;
  description: string;
  has_issues: boolean;
  open_issues_count: string;
  stargazers_count: string;
  created_at: string;
  owner: owner;
  html_url: string;
};
export enum OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}
export interface GithubRepoInputOptions {
  date: string;
  sort?: string;
  order?: OrderBy;
  page: number | 1;
}
