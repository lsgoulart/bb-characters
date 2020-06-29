import React from 'react';
import useCharacter from 'hooks/useCharacter';

const Details = ({ id }) => {
  const { status, data, error, isFetching } = useCharacter(id);

  console.log(status, data, error, isFetching);

  return <div>Detalhes</div>;
};

export default Details;
