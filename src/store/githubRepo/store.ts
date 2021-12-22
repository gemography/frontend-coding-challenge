import { action, observable, flow } from "mobx";
import { CancellablePromise } from "mobx/lib/api/flow";
import { IRootStore } from "../root/store";
import { GithubRepoRepository } from "./repository";

import { GithubRepoInputOptions, GithubRepoType } from "./types";

export interface IGithubRepoStore {
  repos: GithubRepoType[] | null;
  load: (options: GithubRepoInputOptions) => void;
  loading: boolean;
  error: Error | null;
  clearError: () => void;
  clear: () => void; 
}

export function GithubRepoStore(rootStore: IRootStore) {
  const _repository = GithubRepoRepository();
  let _currentLoad: CancellablePromise<any> | null = null;
  const _cancelLoad = () => {
    if (_currentLoad !== null) {
      _currentLoad.catch(() => null);
      _currentLoad.cancel();
      _currentLoad = null;
    }
  }

  const _load = flow(async function*(options: GithubRepoInputOptions) {
    store.loading = true;
    store.repos = null;
    try {
      const repos = yield _repository.load(options);
      store.repos = repos;
    } catch (error) {
      store.error = error;
    }
    store.loading = false;
  });

  const store: IGithubRepoStore = observable<IGithubRepoStore>({
    repos: null,
    load: action<IGithubRepoStore["load"]>((options) => {
      _cancelLoad();
      _currentLoad = _load(options);
    }),
    loading: false,
    error: null,
    clearError: action<IGithubRepoStore["clearError"]>(() => {
      store.error = null;
    }),
    clear: action<IGithubRepoStore["clear"]>(() => {
      _cancelLoad();
      if (store.loading) {
        store.loading = false;
      }
    }),
   
  });

  return store;
}