import React, { FC, useEffect, useState } from 'react';
import type { IBrewery } from '../utils/interface';
import { Filter } from './comps/Filter';
import { Loading } from './comps/Loading';

const App: FC = () => {
  const [localBrews, setLocalBrews] = useState([] as Array<IBrewery>);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  async function getLocalBreweries(latitude: number, longitude: number) {
    const req = await fetch(
      `https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}`,
    );
    const data = await req.json();

    setLocalBrews(data);
    setLoading(!loading);
  }

  function getUserLocation() {
    const success = (local: GeolocationPosition) =>
      getLocalBreweries(local.coords.latitude, local.coords.longitude);

    const error = () =>
      alert(
        'App will not work properly without access to your location. Please change your privacy settings for this browser.',
      );

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <div className="headline-wrapper">
            <h1>My Brew</h1>
            <Filter currentFilter={filter} changeFilter={setFilter} />
          </div>

          {localBrews
            .filter((item) =>
              filter === 'All'
                ? item
                : item.brewery_type === filter.toLowerCase(),
            )
            .map((item) => (
              <article className="brewery-wrapper" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.street != null ? item.street : 'unknown'}</p>
                <p>
                  {item.city != null ? item.city : 'unknown'}, {item.state}
                </p>
                <p>{item.postal_code != null ? item.postal_code : 'unknown'}</p>
                <p>Type: {item.brewery_type}</p>
              </article>
            ))}
        </main>
      )}
    </>
  );
};

export default App;
