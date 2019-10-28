import * as React from 'react';

import { StateProvider } from './components/state/StateProvider';
import initialState from './components/state/initialState';
import StacksPage from './components/page/StacksPage';

const App = () => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'changeStacks':
        return {
          ...state,
          stacks: action.newStacks
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StacksPage />
    </StateProvider>
  );
};

export default App;
