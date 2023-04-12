import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Catalog from '../../components/catalog/Catalog';
import { Provider } from 'react-redux';
import store from '../../store';
import Breadcrumbs from '../../components/breadСrumbs/Breadcrumbs';

describe('Навигация', () => {
  test('clicking on a link should navigate to the corresponding page', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Breadcrumbs />
      </Provider>,
    );

    const link = getByRole('catalogLink');
    fireEvent.click(link);

    expect(window.location.pathname).toBe('/SultanShop/catalog');
  });
});
