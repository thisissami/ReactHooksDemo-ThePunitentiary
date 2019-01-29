import React from 'react';
import PunList from './punList';
import { useCurrentPun } from '../../hooks/useCurrentPun';
import { usePuns } from '../../hooks/usePuns';

const ThePunitentiary = () => {
  const puns = usePuns();

  // custom hook for current puns!
  const [currentPun, setCurrentPun] = useCurrentPun(puns);

  // display them!
  return (
    <>
      <h1>The Punitentiary</h1>
      <PunList puns={puns} onPunClick={setCurrentPun} currentPun={currentPun} />
    </>
  );

}

export default ThePunitentiary;
