import React from 'react';

import { SingleProduct } from './components/SingleProduct';
import { SingleProductListeItem } from './components/SingleProductListeItem';
import { ProductsList } from './components/ProductsList';
import {Musica} from './components/Musica';
import { FirstSection } from './components/FirstSection';
import { SecondSection } from './components/SecondSection';

function App() {
  return (
    <div className="App">
      <FirstSection/>
      <SecondSection/>
      {/* <Musica/> */}
    </div>
  );
}

export default App;
