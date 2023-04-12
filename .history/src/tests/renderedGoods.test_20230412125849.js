import { render } from '@testing-library/react';
import { catalogGoods } from '../data/goods';
import Catalog from '../components/catalog/Catalog';
import '@testing-library/jest-dom';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('LocalDataComponent', () => {
  it('should render local data correctly', () => {
    useSelector.mockReturnValue(catalogGoods);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Catalog />
        </MemoryRouter>
      </Provider>,
    );

    catalogGoods.forEach((good) => {
      if (good.id < 16) {
        const goodElement = getByText(good.title);
        expect(goodElement).toBeInTheDocument();
      }
    });
  });
});
