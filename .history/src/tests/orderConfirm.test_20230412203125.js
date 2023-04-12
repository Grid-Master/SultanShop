import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import cartReducer, { clearCart } from '../store/cartSlice';
import store from '../store';
import CardGood from '../components/cardGood/CardGood';
import Order from '../components/order/Order';

describe('количество единиц товара для заказа', () => {
  it('проверка нижнего предела количества товаров', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Order />
        </MemoryRouter>
      </Provider>,
    );
    const confirmBtn = screen.getByTestId('confirm-order');
    const closeModalBtn = screen.getByTestId('close-order-modal');

    expect(cartReducer({ cart: [] }, clearCart())).toEqual({ cart: [] });
  });
});
