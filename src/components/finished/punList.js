import React from 'react';
import Pun from './pun';

const PunList = ({ puns, onPunClick, currentPunIndex }) => {
  const punList = puns.map((pun, i) => (
    <Pun
      pun={pun}
      key={i}
      bold={i===currentPunIndex}
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
