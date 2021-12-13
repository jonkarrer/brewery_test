import React, { FC, useEffect, useState } from 'react';
import type { IBrewery } from '../utils/interface';
import './styles/App.css';

const App: FC = () => {
  const [allBrews, setAllBrews] = useState([] as Array<IBrewery>);

  async function getBreweries() {
    const req = await fetch('https://api.openbrewerydb.org/breweries');
    const data = await req.json();

    setAllBrews(data);

    console.log(data);
  }
  useEffect(() => {
    getBreweries();
  }, []);
  return (
    <div className="App-container">
      <h1>My Brew</h1>
      {allBrews.map((item: IBrewery) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default App;
