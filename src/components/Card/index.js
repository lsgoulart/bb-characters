import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@reach/router';
import { Box } from 'atomic-layout';

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      as={motion.a}
      to={`personagem/${item.char_id}`}
      key={item.char_id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        style={{
          overflow: 'hidden',
          borderRadius: 10,
          position: 'relative',
        }}
        as={motion.div}
        whileHover={{
          y: -10,
          boxShadow: '0 10px 0 0 #f1ce01',
        }}
      >
        <Box
          width="100%"
          height={250}
          style={{ objectFit: 'cover' }}
          as="img"
          src={item.img}
          alt={item.name}
          title={item.name}
        />
        <Box style={{ position: 'absolute', bottom: 10, left: 10 }}>
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            style={{
              fontWeight: 800,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {item.name}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
