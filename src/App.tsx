import React, { FC, useEffect, useState } from 'react';
import type { IBrewery } from '../utils/interface';

const App: FC = () => {
  const [allBrews, setAllBrews] = useState([] as Array<IBrewery>);

  async function getBreweries(latitude: number, longitude: number) {
    const req = await fetch(
      `https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}`,
    );
    const data = await req.json();
    setAllBrews(data);

    console.log(data);
  }

  function getUserLocation() {
    const success = (local: GeolocationPosition) =>
      getBreweries(local.coords.latitude, local.coords.longitude);

    const error = () =>
      alert(
        'App will not work properly without access to your location. Please change your settings for this browser.',
      );

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <main>
      <h1>My Brew</h1>
      {allBrews.map((item) => (
        <article className="brewery-container" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.street != null ? item.street : 'unknown'}</p>
          <p>
            {item.city != null ? item.city : 'unknown'}, {item.state}
          </p>
          <p>{item.postal_code != null ? item.postal_code : 'unknown'}</p>
        </article>
      ))}
    </main>
  );
};

export default App;
