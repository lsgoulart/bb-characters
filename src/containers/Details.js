import React, { useMemo } from 'react';
import useCharacter from 'hooks/useCharacter';
import { Box } from 'atomic-layout';

import Loader from 'components/Loader';
import PageHeader from 'components/PageHeader';
import CharacterDetails from 'components/Details';

const Details = ({ id }) => {
  const { status, data } = useCharacter(id);

  const isLoading = useMemo(() => status === 'loading', [status]);

  return (
    <Box flex flexWrap="wrap" justifyContent="center">
      <PageHeader />

      {isLoading ? <Loader /> : <CharacterDetails character={data} />}
    </Box>
  );
};

export default Details;
