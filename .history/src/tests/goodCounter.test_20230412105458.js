import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';
import userEvent from '@testing-library/user-event';
import CardGood from '../components/cardGood/CardGood';

describe('количество единиц товара для заказа', () => {
  it('навигация в корзину', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/SultanShop/catalog/4604049097548`]}>
          <CardGood />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('card-good-count')).toBeInTheDocument();
  });
});
