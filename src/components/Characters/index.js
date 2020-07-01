import React from 'react';
import { Box, Composition } from 'atomic-layout';

import Card from 'components/Card';
import Title from 'components/Title';

const Characters = ({ characters }) => (
  <Box paddingHorizontal={32} paddingVertical={32} maxWidth={1240}>
    <Box as={Title} width="100%" marginBottom={64}>
      Breaking Bad Characters
    </Box>
    <Composition
      templateCols="repeat(6, 1fr)"
      templateColsMdDown="repeat(4, 1fr)"
      templateColsSmDown="repeat(2, 1fr)"
      gap={20}
    >
      {characters.map((item) => (
        <Card item={item} />
      ))}
    </Composition>
  </Box>
);

export default Characters;
