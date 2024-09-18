import React, { FC, createContext, useReducer, ReactNode } from 'react';

interface StateData {
  account: { addr: string; shard: string } | undefined;
}

const typeStateMap = {
  SET_ACCOUNT: 'account',
};

const initialState: StateData = {
  account: undefined,
};

const reducer = (state: StateData, action: { type: keyof typeof typeStateMap; payload: any }) => {
  const stateName = typeStateMap[action.type];
  if (!stateName) {
    console.warn(`Unknown action type: ${action.type}`);
    return state;
  }
  return { ...state, [stateName]: action.payload };
};

const StateContext = createContext(initialState);
const DispatchContext = createContext<any>(null);

const StateProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { typeStateMap, StateContext, DispatchContext, StateProvider };
