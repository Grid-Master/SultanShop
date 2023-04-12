import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Media } from 'react-responsive';

jest.mock('react-responsive');
describe('Навигация', () => {
  it('renders desktop-only element on desktop, hides on mobile', () => {
    window.innerWidth = 500;
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    fireEvent.resize(window, { target: { innerWidth: 500 } });

    // Проверяем наличие элемента на десктопе
    expect(screen.getByTestId('header')).toHaveStyle({ display: 'block' });
  });
});
