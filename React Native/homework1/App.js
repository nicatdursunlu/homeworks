import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { RootDrawer } from './navigation/RootDrawer';
import { loadFonts } from './styles/fonts';
import { Provider } from "react-redux";

import { ShopListCTXProvider } from './context/list';
import store from './redux';

import { AppLoading } from 'expo';

export default function App() {

  const [loaded, setLoaded] = useState(false);

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
      <ShopListCTXProvider>
        <RootDrawer />
      </ShopListCTXProvider> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
