import React from 'react';
import { Box } from 'atomic-layout';
import { ReactComponent as Load } from 'assets/loader.svg';

import theme from 'theme';

const Loader = () => (
  <Box marginVertical={theme.space.giga}>
    <Load />
  </Box>
);

export default Loader;
