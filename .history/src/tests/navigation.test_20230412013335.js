import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Навигация', () => {
  test('clicking on a link should navigate to the corresponding page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const cartLink = screen.getByTestId('cart-link');
    userEvent.click(cartLink);
    expect(screen.getByTestId('cart-page')).toBeInTheDocument();
  });
});
