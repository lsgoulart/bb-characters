import React from 'react';
import useCharacter from 'hooks/useCharacter';

const Details = ({ id }) => {
  const { status, data } = useCharacter(id);

  if (status === 'loading') {
    return <span>Carregando...</span>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.img} alt={data.name} title={data.name} />
    </div>
  );
};

export default Details;
