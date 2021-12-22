import React from "react";


export interface IRootStore {
 
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
  
    const store: IRootStore = {
     
    };
    return store;
  }
  
  export const RootStoreContext = React.createContext(RootStore());