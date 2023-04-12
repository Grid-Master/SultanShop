import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Навигация', () => {
  it('навигация в корзину', () => {
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
  it('навигация в каталог', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const catalogLink = screen.getByTestId('catalog-link');
    userEvent.click(catalogLink);
    expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
  });
});
