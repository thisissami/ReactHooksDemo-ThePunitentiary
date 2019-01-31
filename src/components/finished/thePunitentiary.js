import React from 'react';
import PunList from './punList';
import { useCurrentPunIndex } from '../../hooks/useCurrentPunIndex';
import { usePuns } from '../../hooks/usePuns';

const ThePunitentiary = () => {
  /*

  CHALLENGE

  Update the "usePuns" custom hook so that every time a new pun is added,
  the page scrolls to the bottom - ensuring that the latest pun is visible
  in the window.

  */

  const puns = usePuns();

  // custom hook for current puns!
  const [currentPunIndex, setCurrentPunIndex] = useCurrentPunIndex(puns);

  // display them!
  return (
    <>
      <h1>The Punitentiary</h1>
      <PunList puns={puns} onPunClick={setCurrentPunIndex} currentPunIndex={currentPunIndex} />
    </>
  );

}

export default ThePunitentiary;
