import { render, screen } from '@testing-library/react';
import { catalogGoods } from '../data/goods';
import Catalog from '../components/catalog/Catalog';
import '@testing-library/jest-dom';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('рендер товаров', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(catalogGoods.slice());
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('рендер первой страницы с товарами', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Catalog />
        </MemoryRouter>
      </Provider>,
    );

    for (let i = 0; i < 15; i++) {
      const good = screen.getByTestId(`good-${i + 1}`);
      expect(good).toBeInTheDocument();
    }
  });
});
