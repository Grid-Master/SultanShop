import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

test('renders desktop-only element on desktop, hides on mobile', () => {
  const { getByTestId, queryByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );

  // Проверяем наличие элемента на десктопе
  window.innerWidth = 1024;
  expect(getByTestId('header')).toHaveStyle({ display: 'block' });

  // Проверяем отсутствие элемента на мобильном устройстве
  window.innerWidth = 480;
  expect(getByTestId('header')).toHaveStyle({ display: 'none' });
});
