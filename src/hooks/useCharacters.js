import { useQuery } from 'react-query';

import { getAllCharacters } from '../services';

const getCharacters = async () => {
  const { data } = await getAllCharacters();
  return data;
};

export default function useCharacters() {
  return useQuery('characters', getCharacters);
}
