import '@testing-library/jest-dom';
import catalogReducer, { removeGood, addGood, setGoods } from '../store/catalogGoodsSlice';

const catalogGoods = [
  {
    id: 1,
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
    count: 5,
  },
  {
    id: 2,
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
    count: 5,
  },
];

const testGood = {
  id: 3,
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
    const newGoods = catalogGoods.filter((good) => good.id !== 2);
    expect(catalogReducer({ goods: catalogGoods }, removeGood(2))).toEqual({
      goods: newGoods,
    });
  });
  it('добавление товара', () => {
    const newGoods = [...catalogGoods, testGood];
    expect(catalogReducer({ goods: catalogGoods }, setGoods(testGood))).toEqual({
      goods: newGoods,
    });
  });
});
