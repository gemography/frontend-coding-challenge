import axios from 'axios';
import { GithubRepoInputOptions, GithubRepoResponseType } from './types';

export interface IGithubRepoRepository {
  load(options: GithubRepoInputOptions): Promise<GithubRepoResponseType>;
}
const BaseUrl = 'https://api.github.com/search/repositories';

export function GithubRepoRepository(): IGithubRepoRepository {
  return {
    load: async (options) => {
      const url = `${BaseUrl}?q=created:>${options.date}&sort=${options.sort}&order=${options.order}&page=${options.page}`;
      const result = await axios({ url, method: 'GET' });
      return result.data;
    },
  };
}
