import React from 'react';
import { render } from '@testing-library/react';

import Details from './index';

const character = {
  char_id: 2,
  name: 'Jesse Pinkman',
  birthday: '09-24-1984',
  occupation: ['Meth Dealer'],
  img:
    'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
  status: 'Alive',
  nickname: "Cap n' Cook",
  appearance: [1, 2, 3, 4, 5],
  portrayed: 'Aaron Paul',
  category: 'Breaking Bad',
  better_call_saul_appearance: [],
};

describe('Renders Character details', () => {
  test('Should render character name', () => {
    const { getByText } = render(<Details character={character} />);

    expect(getByText('Jesse Pinkman')).toBeInTheDocument();
  });

  test('Should render character image', () => {
    const { getByAltText } = render(<Details character={character} />);

    expect(getByAltText('Jesse Pinkman')).toBeInTheDocument();
  });
});
