import React from 'react';
import PunList from './finished/punList';
import { useCurrentPunIndex } from '../hooks/useCurrentPunIndex';
import { getGoodPuns_Sync } from '../apis/thePunApi';

const ThePunitentiary = () => {
  // grab the puns
  const puns = getGoodPuns_Sync();
  // use our custom hook!
  const [currentPunIndex, setCurrentPunIndex] = useCurrentPunIndex(puns);

  // continuously feed the *very willing* audience more puns
  // **hint** - there might be more functions in thePunAPI


  // display them!
  return (
    <>
      <h1>The Punitentiary</h1>
      <PunList puns={puns} currentPunIndex={currentPunIndex} onPunClick={setCurrentPunIndex} />
    </>
  );

}

export default ThePunitentiary;
