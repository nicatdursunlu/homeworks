import React, { Component } from 'react';

import { RootDrawer } from './navigation/RootDrawer';
import { loadFonts } from './styles/fonts';
import { Provider } from "react-redux";

import store from './redux';
import { AppLoading } from 'expo';

export default class App extends Component {

  //const [loaded, setLoaded] = useState(false);

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
