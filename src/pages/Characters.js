import React from 'react';
import { Link } from '@reach/router';
import useCharacters from 'hooks/useCharacters';

const Characters = () => {
  const { status, data, error, isFetching } = useCharacters();

  console.log(status, data, error, isFetching);

  if (isFetching) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <Link to={`personagem/${item.char_id}`}>{item.name}</Link>
      ))}
    </div>
  );
};

export default Characters;
