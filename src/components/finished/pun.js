import React from 'react';

const Pun = ({ pun, bold, onClick }) => (
  <p onClick={onClick}>
    {bold
      ? <b><u>{ pun }</u></b>
      : <>{ pun }</>
    }
  </p>
);

export default Pun;
