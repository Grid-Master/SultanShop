import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Catalog from '../../components/catalog/Catalog';
import { Provider } from 'react-redux';

describe('Навигация', () => {
  test('clicking on a link should navigate to the corresponding page', () => {
    const { getByRole } = render(
      <Provider>
        {' '}
        <Router>
          <Catalog />
        </Router>
      </Provider>,
    );

    const link = getByRole('catalogLink');
    fireEvent.click(link);

    expect(window.location.pathname).toBe('/SultanShop/catalog');
  });
});
