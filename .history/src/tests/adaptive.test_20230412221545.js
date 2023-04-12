import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { useMediaQuery } from 'react-responsive';

jest.mock('react-responsive');

test('renders desktop-only element on desktop, hides on mobile', () => {
  useMediaQuery.mockReturnValueOnce(false);
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );

  // Проверяем наличие элемента на десктопе
  expect(getByTestId('header')).toHaveStyle({ display: 'block' });

  useMediaQuery.mockReturnValueOnce(true);
  const { getAllByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );
  // Проверяем отсутствие элемента на мобильном устройстве
  expect(getAllByTestId[0]('header')).not.toHaveStyle({ display: 'block' });
});
