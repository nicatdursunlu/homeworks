import React, { Component } from 'react';
import { Provider } from "react-redux";
import { AppLoading } from 'expo';

import store from './redux';
import { RootDrawer } from './navigation/RootDrawer';
import { loadFonts } from './styles/fonts';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };
  
  render() {
    if(!this.state.loaded) {
      return(
        <AppLoading
          startAsync={loadFonts}
          onFinish={this.setLoaded}
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
};
