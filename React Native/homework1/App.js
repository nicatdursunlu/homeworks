import React, { useState } from 'react';
import { AsyncStorage, View } from 'react-native';

import { RootDrawer } from './navigation/RootDrawer';
import { loadFonts } from './styles/fonts';
import { Provider } from "react-redux";

import store from './redux';
import { AppLoading } from 'expo';
import { getData } from './redux/data';

export default function App() {

  const [loaded, setLoaded] = useState(false);

  const getAllData = async () => {
    const data = await AsyncStorage.getItem("data").then(value);
    const json = JSON.parse(data);

    //store.ge
  };

  const storedData = async () => {
    const value = JSON.stringify(store.getState());
    await AsyncStorage.setItem("")
  };

  if(!loaded) {
    return(
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => console.log("Something Wrong")}
      />
    );
  }

  return (
    
    <Provider store={store}>
        <RootDrawer />
    </Provider>
  );
}
