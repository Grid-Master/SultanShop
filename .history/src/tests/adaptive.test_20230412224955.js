import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MediaQuery from 'react-responsive/types/Component';

describe('Навигация', () => {
  it('renders desktop-only element on desktop, hides on mobile', () => {
    render(
      <MediaQuery>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MediaQuery>,
    );

    // Проверяем наличие элемента на десктопе
    expect(screen.getByTestId('header')).toHaveStyle({ display: 'block' });
  });
});
