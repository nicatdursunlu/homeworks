import React, { useState } from 'react';

import { RootDrawer } from './navigation/RootDrawer';
import { loadFonts } from './styles/fonts';
import { Provider } from "react-redux";

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
        <RootDrawer />
    </Provider>
  );
}
