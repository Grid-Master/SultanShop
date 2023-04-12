import '@testing-library/jest-dom';
import Reducer from '../store/catalogGoodsSlice';
import { catalogGoods } from '../data/goods';
import { removeGood } from '../store/catalogGoodsSlice';

describe('сортировка товаров', () => {
  it('сортировка товаров по возрастанию цены', () => {
    const newGoods = catalogGoods.filter((good) => good.id !== 4);
    expect(
      catalogGoods({ goods: catalogGoods }, removeGood(4)).toEqual({
        goods: newGoods,
      }),
    );
  });
});
