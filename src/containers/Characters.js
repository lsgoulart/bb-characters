import React, { useMemo } from 'react';
import { Box } from 'atomic-layout';

import PageHeader from '../components/PageHeader';
import CharactersList from '../components/Characters';
import Loader from '../components/Loader';

import useCharacters from '../hooks/useCharacters';

const Characters = () => {
  const { status, data } = useCharacters();

  const isLoading = useMemo(() => status === 'loading', [status]);

  return (
    <Box flex flexWrap="wrap" justifyContent="center">
      <PageHeader />

      {isLoading ? <Loader /> : <CharactersList characters={data} />}
    </Box>
  );
};

export default Characters;
