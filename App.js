import React from 'react';
import { createStore } from "redux";
import allReducers from './src/redux/reducers';
import { Provider } from "react-redux";
import Counter from './src/redux/screens/Counter';

//The created store
const store = createStore(
  allReducers,
);

const App = () => {
  return (
    //provider to provide the redux store all over the app
    <Provider store={store}>
    <Counter/>
  </Provider>)
}


export default App;
