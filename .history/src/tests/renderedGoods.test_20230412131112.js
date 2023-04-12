import { render } from '@testing-library/react';
import { catalogGoods } from '../data/goods';
import Catalog from '../components/catalog/Catalog';
import '@testing-library/jest-dom';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
  }));

describe('LocalDataComponent', () => {
  it('should render local data correctly', () => {
    beforeEach(() => {
        // Устанавливаем мок для useSelector для возврата данных каталога с 15 элементами
        useSelector.mockReturnValue(catalogGoods.slice());
      });
    
      afterEach(() => {
        // Очищаем мок после каждого теста
        useSelector.mockClear();
      });
    
      it('renders first page of goods data', () => {
        // Рендерим компонент с помощью react-testing-library
        render(
          <Provider store={store}>
            <MemoryRouter>
              <Catalog />
            </MemoryRouter>
          </Provider>
        );
    
        // Ищем элементы на странице с помощью screen.getBy* методов
        // Для того чтобы проверить, что на странице рендерится первые 10 элементов,
        // мы можем найти элементы с именами первых 10 элементов в наших тестовых данных.
        // Если элементы найдены, значит они отрендерены на странице.
        for(let i = 0; i < 15; i++) {
            expect(screen.getByTestId(`good-${i+1}`)).toBeInTheDocument();

        }
  });
});
