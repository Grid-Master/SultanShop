import '@testing-library/jest-dom';
import { catalogGoods } from '../data/goods';
import catalogReducer, { addGoodFromAdmin, removeGood } from '../store/catalogGoodsSlice';

const testGood = {
  id: 20,
  image: 'goodImage4',
  title: 'Ср-во для мытья посуды Апельсин+мята',
  careType: ['hands'],
  measureType: 'volume',
  measureValue: '300 мл',
  barcode: '4604049097777',
  manufacturer: 'Нэфис',
  brand: 'AOS',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
  price: 25.75,
};

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
