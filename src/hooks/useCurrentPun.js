import { useState, useEffect } from 'react';

export const useCurrentPun = (puns) => {
  const [currentPun, setCurrentPun] = useState(-1);
  useEffect(() => {
    // update the document title
    if (currentPun >= 0) {
      document.title = puns[currentPun];
    }
  });

  return [currentPun, setCurrentPun];
}