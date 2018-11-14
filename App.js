import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './src/configs/appRouter';
import appStore from './src/configs/appStore';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
        <Provider store={appStore}>
            <AppRouter />
        </Provider>
    );
  }
}