import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navigate } from '@reach/router';
import { Box } from 'atomic-layout';
import styled from 'styled-components';

import Title from 'components/Title';

const Wrapper = styled(Box)`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CharacterInfos = styled(Box)`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onClick={() => navigate(`personagem/${item.char_id}`)}
      key={item.char_id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ cursor: 'pointer' }}
    >
      <Wrapper
        as={motion.div}
        whileHover={{
          y: -10,
          boxShadow: '0 10px 0 0 #f1ce01',
        }}
      >
        <Image src={item.img} alt={item.name} title={item.name} />

        <CharacterInfos>
          <Title
            as={motion.h4}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          >
            {item.name}
          </Title>
        </CharacterInfos>
      </Wrapper>
    </motion.div>
  );
};

export default Card;
