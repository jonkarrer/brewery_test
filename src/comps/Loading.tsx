import React, { FC } from 'react';

export const Loading: FC = () => (
  <div className="loading-page">
    <img src="./mug.png" alt="mug" data-test="image" />
    <h1>Loading...</h1>
    <p>(make sure location is enabled)</p>
  </div>
);
