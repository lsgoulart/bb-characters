import React from 'react';
import { render } from '@testing-library/react';

import Characters from './index';

const characters = [
  {
    char_id: 1,
    name: 'Nome',
    img: 'http://lorempixel.com/200/200',
  },
  {
    char_id: 2,
    name: 'Nome 2',
    img: 'http://lorempixel.com/200/200',
  },
];

describe('Renders Characters list component', () => {
  test('Page should have heading', () => {
    const { getByText } = render(<Characters characters={characters} />);

    expect(getByText('Breaking Bad Characters')).toBeInTheDocument();
  });

  test('Should render cards list', () => {
    const { getAllByTestId } = render(<Characters characters={characters} />);
    expect(getAllByTestId('characters__card')).toHaveLength(2);
  });
});
