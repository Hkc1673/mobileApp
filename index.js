/**
 * @format
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import {AppRegistry} from 'react-native';
 import {Provider} from 'react-redux';
 import store from './src/stores';
 import App from './App';
 import {name as appName} from './app.json';
 
 
 const Root = () => (
   <Provider store={store}>
     <App />
   </Provider>
 )
 
 AppRegistry.registerComponent(appName, () => Root);
