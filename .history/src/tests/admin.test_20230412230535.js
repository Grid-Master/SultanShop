import '@testing-library/jest-dom';
import adminReducer from '../store/adminSlice';
import { catalogGoods } from '../data/goods';
import { removeGood } from '../store/catalogGoodsSlice';

describe('сортировка товаров', () => {
  it('сортировка товаров по возрастанию цены', () => {
    const newGoods = catalogGoods.filter((good) => good.id !== 4);
    expect(
      adminReducer({ goods: catalogGoods }, removeGood(4)).toEqual({
        goods: newGoods,
      }),
    );
  });
});
