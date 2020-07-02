import React from 'react';
import { Box, Composition } from 'atomic-layout';

import Card from '../Card';
import Title from '../Title';

import theme from '../../theme';

const Characters = ({ characters }) => (
  <Box
    paddingHorizontal={theme.space.tera}
    paddingVertical={theme.space.tera}
    maxWidth={1240}
  >
    <Box as={Title} width="100%" marginBottom={theme.space.yotta}>
      Breaking Bad Characters
    </Box>

    <Composition
      templateCols="repeat(6, 1fr)"
      templateColsMdDown="repeat(4, 1fr)"
      templateColsSmDown="repeat(2, 1fr)"
      templateColsXsDown="repeat(1, 1fr)"
      gap={theme.space.giga}
      data-testid="characters__list"
    >
      {characters.map((item) => (
        <Card item={item} key={item.char_id} />
      ))}
    </Composition>
  </Box>
);

export default Characters;
