import React, { createContext, useContext, useReducer, Dispatch } from 'react';

interface State {
  stacks: any;
}

interface StateProviderProps {
  reducer: React.Reducer<State, {}>;
  initialState: State;
  children: React.ReactNode;
}

export const StateContext = createContext<[State, Dispatch<{}>]>([] as any);

export const StateProvider = ({
  reducer,
  initialState,
  children
}: StateProviderProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
