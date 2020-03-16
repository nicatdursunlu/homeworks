import React from 'react';
import {useState, useEffect} from 'react';
import {FirstSection} from './components/FirstSection';
import './styles.scss';
import { SecondSection } from './components/SecondSection';

function App() {
  
  const [data, setData] = useState({ products: [] });
  console.log(data);

  const getData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(data => ({
      ...newData,
      products: [...data.products, ...newData.products]
    }));
    console.log(data);
  };

  useEffect(() => {
    getData('./products.json')
  }, []);

  return (
    <div className="App">

      <FirstSection/>
      <SecondSection/>
{/* 
       {!!data.products.length ? data.products.map(({ name, url, id, price, description }) => (
        <h4 key={id}>{id}<br/>
                    {name}<br/>
                    {price}<br/>
                    {description}
        </h4>
        )) :
        <h1>Loading...</h1>
       }  */}


    </div>
  );
}

export default App;
