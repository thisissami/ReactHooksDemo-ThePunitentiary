import React from 'react';
import PunList from './punList';
// the "Sync" below is for "Synchronous"
import { getGoodPuns_Sync } from '../apis/thePunApi';

const ThePunderdome = () => {
  // grab the puns
  const puns = getGoodPuns_Sync();

  // display them!
  return (
    <>
      <h1>The Punderdome</h1>
      <PunList puns={puns} />
    </>
  );

}

export default ThePunderdome;