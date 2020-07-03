import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'atomic-layout';
import styled from 'styled-components';

import Title from '../Title';

import theme from '../../theme';

const Image = styled.img`
  max-width: 350px;
  width: 50%;
  height: 480px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 0 0 #f1ce01;

  @media (max-width: 800px) {
    opacity: 0.3;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: ${theme.space.mega}px;
  }
`;

const Li = ({ children }) => (
  <Box as="li" marginBottom={theme.space.hecto}>
    {children}
  </Box>
);

Li.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const Details = ({ character }) => {
  return (
    <Box
      paddingHorizontal={theme.space.tera}
      paddingVertical={theme.space.tera}
      maxWidth={1240}
      width="100%"
    >
      <Box flex justifyContent="flex-start" width="100%" flexWrap="wrap">
        <Image
          src={character.img}
          alt={character.name}
          title={character.name}
        />
        <Box marginLeftMd={theme.space.giga}>
          <Title align="left">{character.name}</Title>

          <Box marginTop={theme.space.mega} as="ul">
            <Li>
              <strong>Interpretado por:</strong> {character.portrayed}
            </Li>
            <Li>
              <strong>Data de nascimento:</strong> {character.birthday}
            </Li>
            <Li>
              <strong>Temporadas:</strong> {character.appearance.join(', ')}
            </Li>
            <Li>
              <strong>Conhecido como:</strong> {character.nickname}
            </Li>
            <Li>
              <strong>Ocupações:</strong> {character.occupation.join(', ')}
            </Li>
            <Li>
              <strong>Vivo:</strong>{' '}
              {character.status === 'Alive' ? 'Sim' : 'Não'}
            </Li>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Details.propTypes = {
  character: PropTypes.shape({
    status: PropTypes.string.isRequired,
    appearance: PropTypes.arrayOf(PropTypes.number).isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.arrayOf(PropTypes.string).isRequired,
    nickname: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    portrayed: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;
