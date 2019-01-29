import React from 'react';
import Pun from './pun';

const PunList = ({ puns, onPunClick, currentPun }) => {
  const punList = puns.map((pun, i) => (
    <Pun
      pun={pun}
      key={i}
      bold={i===currentPun}
      onClick={() => onPunClick(i)}
    />
  ));

  return (
    <>
      {punList}
    </>
  );
};

export default PunList;
