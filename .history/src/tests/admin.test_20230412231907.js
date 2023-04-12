import '@testing-library/jest-dom';
import { catalogGoods } from '../data/goods';
import catalogReducer, { addGoodFromAdmin, removeGood } from '../store/catalogGoodsSlice';

const testGood = catalogGoods[5];

describe('управление каталогом', () => {
  it('удаление товара', () => {
    const newGoods = catalogGoods.filter((good) => good.id !== 4);
    expect(catalogReducer({ goods: catalogGoods }, removeGood(4))).toEqual({
      goods: newGoods,
    });
  });
  it('добавление товара', () => {
    const newGoods = [...catalogGoods, testGood];
    expect(catalogReducer({ goods: catalogGoods }, addGoodFromAdmin(testGood))).toEqual({
      goods: newGoods,
    });
  });
});
