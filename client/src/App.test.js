import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Zombie Apocalypse Tactical Packs heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Zombie Apocalypse Tactical Packs/i);
  expect(headingElement).toBeInTheDocument();
});
