import '@testing-library/jest-dom';
import { catalogGoods } from '../data/goods';
import catalogReducer, { removeGood } from '../store/catalogGoodsSlice';

describe('сортировка товаров', () => {
  it('сортировка товаров по возрастанию цены', () => {
    const newGoods = catalogGoods.filter((good) => good.id !== 4);
    expect(
      catalogReducer({ goods: catalogGoods }, removeGood(4))
    ).toEqual({
        goods: newGoods,
      }),
  });
});
