import React from 'react';
import { Box } from 'atomic-layout';
import styled from 'styled-components';

import theme from '../../theme';

const Wrapper = styled(Box)`
  position: relative;
`;

const Overlay = styled(Box)`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(30, 30, 30, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const PageHeader = () => (
  <Wrapper marginBottom={theme.space.yotta}>
    <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9ax36f-58c5219d-5031-4b85-b660-d35e802abcd3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGQwNTEzYzctZjA2NC00MGE4LTkzOTQtZDRmNGI0ZTkxOTQzXC9kOWF4MzZmLTU4YzUyMTlkLTUwMzEtNGI4NS1iNjYwLWQzNWU4MDJhYmNkMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CngoFQeYydQxy47xVax_38SImArf6MCZxittg926Pkc" />

    <Overlay />
  </Wrapper>
);

export default PageHeader;
