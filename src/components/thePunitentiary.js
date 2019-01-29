import React from 'react';
import PunList from './finished/punList';
import { useCurrentPun } from '../hooks/useCurrentPun';
import { getGoodPuns_Sync } from '../apis/thePunApi';

const ThePunitentiary = () => {
  // grab the puns
  const puns = getGoodPuns_Sync();
  // use our custom hook!
  const [currentPun, setCurrentPun] = useCurrentPun(puns);

  // continuously feed the *very willing* audience more puns


  // display them!
  return (
    <>
      <h1>The Punitentiary</h1>
      <PunList puns={puns} onPunClick={setCurrentPun} currentPun={currentPun} />
    </>
  );

}

export default ThePunitentiary;
