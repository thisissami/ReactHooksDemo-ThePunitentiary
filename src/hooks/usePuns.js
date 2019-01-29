import { useEffect, useState } from 'react';
import {
  getGoodPuns_Sync,
  subscribeToThePunitentiary,
  unsubscribeFromAll
} from '../apis/thePunApi';

export const usePuns = () => {
  // grab the puns
  const [puns, setPuns] = useState(getGoodPuns_Sync());

  const handleNewPun = (newPun) => {
    // we don't wanna mutate puns!
    const newPuns = [...puns, newPun];
    setPuns(newPuns);
  }

  // continuously feed the *very willing* audience more puns
  useEffect(() => {
    subscribeToThePunitentiary(handleNewPun);
    return () => {
      unsubscribeFromAll();
    }
  })

  return puns;
}
