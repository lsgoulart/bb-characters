import React from 'react';
import { Composition, Box } from 'atomic-layout';
import Card from 'components/Card';
import useCharacters from 'hooks/useCharacters';

const Characters = () => {
  const { status, data } = useCharacters();

  if (status === 'loading') {
    return <div>Carregando...</div>;
  }

  return (
    <Box flex justifyContent="center">
      <Box paddingHorizontal={32} paddingVertical={32} maxWidth={1240}>
        <Composition
          templateCols="repeat(6, 1fr)"
          templateColsMdDown="repeat(4, 1fr)"
          templateColsSmDown="repeat(2, 1fr)"
          gap={20}
        >
          {data.map((item) => (
            <Card item={item} />
          ))}
        </Composition>
      </Box>
    </Box>
  );
};

export default Characters;
