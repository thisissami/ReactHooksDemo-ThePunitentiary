import { useState, useEffect } from 'react';

export const useCurrentPunIndex = (puns) => {
  const [currentPunIndex, setCurrentPunIndex] = useState(-1);
  useEffect(() => {
    // update the document title
    if (currentPunIndex >= 0) {
      document.title = puns[currentPunIndex];
    }
  });

  return [currentPunIndex, setCurrentPunIndex];
}