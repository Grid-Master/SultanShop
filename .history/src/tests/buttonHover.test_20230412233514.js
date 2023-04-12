import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

it('проверка на hover', () => {
  render(<Header />);
  expect(getByRole('price-list')).toBeInTheDocument();
  //   fireEvent.mouseEnter(button);

  //   const content = getByText('Some content');
  //   expect(content).toBeInTheDocument();
});
