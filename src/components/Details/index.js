import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'atomic-layout';
import styled from 'styled-components';

import Title from 'components/Title';

import theme from 'theme';

const Image = styled.img`
  max-width: 350px;
  width: 50%;
  height: 480px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 0 0 #f1ce01;
`;

const Details = ({ character }) => {
  return (
    <Box
      paddingHorizontal={theme.space.tera}
      paddingVertical={theme.space.tera}
      maxWidth={1240}
      width="100%"
    >
      <Box flex justifyContent="flex-start" width="100%">
        <Image
          src={character.img}
          alt={character.name}
          title={character.name}
        />
        <Box marginLeft={theme.space.giga}>
          <Title align="left">{character.name}</Title>
          <Box marginTop={theme.space.mega} as="ul">
            <Box as="li" marginBottom={theme.space.hecto}>
              <strong>Interpretado por:</strong> {character.portrayed}
            </Box>
            <Box as="li" marginBottom={theme.space.hecto}>
              <strong>Data de nascimento:</strong> {character.birthday}
            </Box>
            <Box as="li" marginBottom={theme.space.hecto}>
              <strong>Temporadas:</strong> {character.appearance.join(', ')}
            </Box>
            <Box as="li" marginBottom={theme.space.hecto}>
              <strong>Conhecido como:</strong> {character.nickname}
            </Box>
            <Box as="li" marginBottom={theme.space.hecto}>
              <strong>Ocupações:</strong> {character.occupation.join(', ')}
            </Box>
            <Box as="li" marginBottom={theme.space.hecto}>
              <strong>Vivo:</strong>{' '}
              {character.status === 'Alive' ? 'Sim' : 'Não'}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Details.propTypes = {
  character: PropTypes.instanceOf(Object).isRequired,
};

export default Details;
