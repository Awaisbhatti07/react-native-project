import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store'; // The store holds the global state of your app.
import AppNavigator from './navigations/AppNavigator';

// Provider is a React component from react-redux library.
// It makes the Redux store available to your entire React app (or any React components nested inside it).
// Without Provider, your React components cannot access the Redux store or dispatch actions.

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
