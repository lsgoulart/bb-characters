import { useQuery } from 'react-query';

import { getCharacterById } from 'services';

const getCharacter = async (_, id) => {
  const { data } = await getCharacterById(id);
  return data;
};

export default function useCharacter(id) {
  return useQuery(['character', id], getCharacter);
}
