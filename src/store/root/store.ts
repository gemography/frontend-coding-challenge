import React from 'react';
import { GithubRepoStore, IGithubRepoStore } from '../githubRepo/store';

export interface IRootStore {
  githubRepoStore: IGithubRepoStore;
  // other stores should come here
}

export function RootStore() {
  const lazyStore = <S>(factory: (root: IRootStore) => S) => {
    let _store: S | null = null;
    return () => {
      if (_store === null) {
        _store = factory(store);
      }
      return _store;
    };
  };

  const _githubRepoStore = lazyStore(GithubRepoStore);

  const store: IRootStore = {
    get githubRepoStore() {
      return _githubRepoStore();
    },
  };
  return store;
}

export const RootStoreContext = React.createContext(RootStore());
