import React from 'react';
import Pun from './pun';

const PunList = ({ puns }) => {
  const punList = puns.map((pun, ny) => <Pun chLine={pun} key={ny} />);
  return (
    <>
      {punList}
    </>
  );
};

export default PunList;
