import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Panel from '../components/panel/Panel';

it('проверка на hover', () => {
  render(<Panel />);
  expect(getByRole('price-list')).toBeInTheDocument();
  //   fireEvent.mouseEnter(button);

  //   const content = getByText('Some content');
  //   expect(content).toBeInTheDocument();
});
