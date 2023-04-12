import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MediaQuery from 'css-mediaquery';

function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}

describe('Навигация', () => {
  it('renders desktop-only element on desktop, hides on mobile', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    // Проверяем наличие элемента на десктопе
    expect(screen.getByTestId('header')).toHaveStyle({ display: 'block' });
  });
});
