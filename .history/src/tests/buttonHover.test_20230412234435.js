import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Panel from '../components/panel/Panel';
import App from '../App';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

it('проверка на hover', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );
  const button = screen.getByRole('price-list');
  expect(button).toHaveStyle({ opacity: '100%' });
  fireEvent.mouseEnter(button);

  //   const content = getByText('Some content');
  expect(button).toHaveStyle({ opacity: '80%' });
});
