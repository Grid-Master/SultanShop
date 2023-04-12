import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider, useSelector } from 'react-redux';
import cartReducer, { clearCart } from '../store/cartSlice';
import store from '../store';
import CardGood from '../components/cardGood/CardGood';
import Order from '../components/order/Order';
import userEvent from '@testing-library/user-event';

const orderItems = [
  {
    id: 1,
    image: 'goodImage1',
    title: 'средство для мытья посуды Crystal',
    careType: ['hands'],
    measureType: 'volume',
    measureValue: '450 мл',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 48.76,
    count: 2,
  },
  {
    id: 2,
    image: 'goodImage2',
    title: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
    careType: ['hands'],
    measureType: 'weight',
    measureValue: '15X28.8 г',
    barcode: '4604049097521',
    manufacturer: 'Нэфис',
    brand: 'ARIEL',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 32.12,
    count: 4,
  },
  {
    id: 3,
    image: 'goodImage3',
    title: 'Порошок стиральный Автомат 100 пятен COMPACT',
    careType: ['hands'],
    measureType: 'weight',
    measureValue: '1500 г',
    barcode: '4604049097599',
    manufacturer: 'Нэфис',
    brand: 'BIMAX',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 55.22,
    count: 1,
  },
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('количество единиц товара для заказа', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(orderItems);
  });

  afterEach(() => {
    useSelector.mockClear();
  });
  it('проверка нижнего предела количества товаров', () => {
    const { queryAllByTestId, queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Order />
        </MemoryRouter>
      </Provider>,
    );

    const confirmBtn = queryByTestId('confirm-order');
    const closeModalBtn = queryByTestId('close-order-modal');

    const orderItems = queryAllByTestId(`order-item`);
    orderItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    //     userEvent.click(confirmBtn);
    //     userEvent.click(closeModalBtn);
  });
});
