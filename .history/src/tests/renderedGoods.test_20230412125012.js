import { render } from '@testing-library/react';
import { catalogGoods } from '../data/goods';
import Catalog from '../components/catalog/Catalog';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('LocalDataComponent', () => {
  it('should render local data correctly', () => {
    useSelector.mockReturnValue(catalogGoods);

    const { getByText } = render(<Catalog />);

    catalogGoods.forEach((good) => {
      const goodElement = getByText(good.title);
      expect(goodElement).toBeInTheDocument();
    });
  });
});
