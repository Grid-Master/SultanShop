import { catalogGoods } from '../data/goods';
import '@testing-library/jest-dom';
import { sortGoodsByPrice } from '../store/catalogGoodsSlice';
import catalogGoodsReducer from '../store/catalogGoodsSlice';

describe('сортировка товаров', () => {
  it('сортировка товаров по возрастанию цены', () => {
    const sortedGoods = catalogGoods.slice().sort((a, b) => a.price - b.price);
    expect(catalogGoodsReducer({ goods: catalogGoods }, sortGoodsByPrice('+'))).toEqual({
      goods: sortedGoods,
    });
  });
  it('сортировка товаров по убыванию цены ', () => {
    const sortedGoods = catalogGoods.slice().sort((a, b) => b.price - a.price);
    expect(catalogGoodsReducer({ goods: catalogGoods }, sortGoodsByPrice('-'))).toEqual({
      goods: sortedGoods,
    });
  });
});
