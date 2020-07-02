import React from 'react';
import { render, act, fireEvent, screen } from '@testing-library/react';

import Card from './index';

const item = {
  char_id: 1,
  name: 'Nome',
  img: 'http://lorempixel.com/200/200',
};

describe('Render Card component', () => {
  test('Card component shoul have a title and a img tag', () => {
    const { getByAltText, getByText } = render(<Card item={item} />);

    expect(getByText('Nome')).toBeInTheDocument();
    expect(getByAltText('Nome')).toBeInTheDocument();
  });

  test('Should navigate to details when click on Card component', () => {
    const { container } = render(<Card item={item} />);

    fireEvent.click(container.querySelector('#Card__1'));

    expect(document.location.pathname).toBe('/personagem/1');
  });
});
