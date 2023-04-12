import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Panel from '../components/panel/Panel';
import App from '../App';

it('проверка на hover', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByRole('price-list')).toBeInTheDocument();
  //   fireEvent.mouseEnter(button);

  //   const content = getByText('Some content');
  //   expect(content).toBeInTheDocument();
});
