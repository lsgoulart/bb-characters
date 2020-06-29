import React from 'react';
import { Link } from '@reach/router';
import useCharacters from 'hooks/useCharacters';

const Characters = () => {
  const { status, data } = useCharacters();

  if (status === 'loading') {
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
