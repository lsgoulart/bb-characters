import React from 'react';
import { Composition, Box } from 'atomic-layout';
import Card from 'components/Card';
import useCharacters from 'hooks/useCharacters';

const Characters = () => {
  const { status, data } = useCharacters();

  if (status === 'loading') {
    return <div>Carregando...</div>;
  }

  return (
    <Box flex flexWrap="wrap" justifyContent="center">
      <Box style={{ position: 'relative' }} marginBottom={64}>
        <Box
          as="img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d0513c7-f064-40a8-9394-d4f4b4e91943/d9ax36f-58c5219d-5031-4b85-b660-d35e802abcd3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGQwNTEzYzctZjA2NC00MGE4LTkzOTQtZDRmNGI0ZTkxOTQzXC9kOWF4MzZmLTU4YzUyMTlkLTUwMzEtNGI4NS1iNjYwLWQzNWU4MDJhYmNkMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CngoFQeYydQxy47xVax_38SImArf6MCZxittg926Pkc"
          width="100%"
          height="50vh"
          style={{ objectFit: 'cover' }}
        />

        <Box
          width="100%"
          height="100%"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0, 0) 0%, rgba(30, 30, 30, 1) 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Box>
      <Box paddingHorizontal={32} paddingVertical={32} maxWidth={1240}>
        <Box
          as="h1"
          width="100%"
          style={{
            color: 'white',
            fontWeight: 900,
            textAlign: 'center',
            fontSize: 48,
          }}
          marginBottom={64}
        >
          Breaking Bad Characters
        </Box>
        <Composition
          templateCols="repeat(6, 1fr)"
          templateColsMdDown="repeat(4, 1fr)"
          templateColsSmDown="repeat(2, 1fr)"
          gap={20}
        >
          {data.map((item) => (
            <Card item={item} />
          ))}
        </Composition>
      </Box>
    </Box>
  );
};

export default Characters;
