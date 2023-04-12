import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';
import userEvent from '@testing-library/user-event';
import CardGood from '../components/cardGood/CardGood';

describe('количество единиц товара для заказа', () => {
  it('проверка нижнего предела количества товаров', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/SultanShop/catalog/4604049097548`]}>
          <CardGood />
        </MemoryRouter>
      </Provider>,
    );
    const incrementCount = screen.getByTestId('increment-count');
    const decrementCount = screen.getByTestId('decrement-count');

    expect(screen.getByTestId('card-good-count')).toHaveTextContent('1');
    fireEvent.click(incrementCount);
    expect(screen.getByTestId('card-good-count')).toHaveTextContent('2');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementCount);
    }
    expect(screen.getByTestId('card-good-count')).toHaveTextContent('12');

    for (let i = 0; i < 50; i++) {
      fireEvent.click(decrementCount);
    }
    //ниже 1 не опустится
    expect(screen.getByTestId('card-good-count')).toHaveTextContent('1');
  });
});
