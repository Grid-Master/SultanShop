import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

describe('проверка событий', () => {
  it('событие для input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const input = screen.getByTestId('value-manufacturer');
    expect(screen.queryByTestId('value-manufacturer')).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'ARIEL' },
    });
    expect(screen.queryByTestId('value-manufacturer')).toContainHTML('ARIEL');
  });
  it('событие для button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const btnBurger = screen.getByTestId('burger-btn');
    const toggleBurger = screen.getByTestId('burger-elem');
    expect(toggleBurger).toHaveStyle('opacity: 0');
  });
});
