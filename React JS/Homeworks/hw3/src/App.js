import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProductsContextProvider } from './context/products';
import { ThemeContextProvider } from './context/theme';
import { CartContextProvider } from './context/cart';

import {
  Homepage,
  Cart
} from './pages';


function App() {
  return (
      <Router>
        <ProductsContextProvider>
          <ThemeContextProvider>
            <CartContextProvider>
            <Switch>
              <Route path="/products" component={Homepage} />
              <Route path="/cart" component={Cart} />
            </Switch>
            </CartContextProvider>
          </ThemeContextProvider>
        </ProductsContextProvider>
      </Router>
  );
}

export default App;
