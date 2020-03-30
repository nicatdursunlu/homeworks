import React from 'react';
import { useState, useEffect } from 'react';

export const Musica = () => {

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

    return(
        <div>
            <h1>Hello World</h1>
            {data.products.map(( { id, name, image, desc }) => (
                <div>
                <h2>{name}</h2>
                <h2>{desc}</h2>
                <h2>{id}</h2>
                <img src={image} alt={name}/ >
                    </div>
            ))}
        </div>
    )
}