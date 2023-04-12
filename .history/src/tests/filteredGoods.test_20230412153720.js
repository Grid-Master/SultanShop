import { catalogGoods } from '../data/goods';
import '@testing-library/jest-dom';
import catalogGoodsReducer from '../store/catalogGoodsSlice';

describe('фильтр товаров', () => {
  it('фильтр товаров по типу ухода за руками', () => {
    const filteredGoods = catalogGoods.filter((good) => good.careType.includes(action.payload));
    expect(catalogGoodsReducer({ goods: catalogGoods }, filteredGoods('hands'))).toEqual({
      goods: filteredGoods,
    });
  });
});
