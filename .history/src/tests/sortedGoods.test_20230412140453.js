import { render, screen } from '@testing-library/react';
import { catalogGoods } from '../data/goods';
import Catalog from '../components/catalog/Catalog';
import '@testing-library/jest-dom';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import { sortGoodsByPrice } from '../store/catalogGoodsSlice';
import catalogGoodsReducer from '../store/catalogGoodsSlice';

describe('сортировка товаров', () => {
  it('сортировка товаров по возрастанию на первой странице', () => {
    const sortedGoods = catalogGoods.sort((a, b) => a.price - b.price);

    expect(catalogGoodsReducer(catalogGoods, sortGoodsByPrice('+'))).toEqual(sortedGoods);
  });
});
