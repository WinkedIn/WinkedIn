import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppLoader from './src/components/AppLoader';
import RootNavigation from './src/navigation/RootNavigation';
import {AppState, Dimensions, StatusBar, Text, View} from 'react-native';
import config from './src/config';


const App = () => {




  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={config.colors.white}
      />
      <RootNavigation />
     
    </Provider>
  );
};

export default App;
