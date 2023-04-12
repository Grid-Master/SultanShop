import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Catalog from '../../components/catalog/Catalog';
import { Provider } from 'react-redux';
import store from '../../store';
import Breadcrumbs from '../../components/breadСrumbs/Breadcrumbs';
import App from '../../App';
import userEvent from '@testing-library/user-event';

describe('Навигация', () => {
  test('clicking on a link should navigate to the corresponding page', () => {
    render(<App />);
    const catalogLink = screen.getByTestId('catalog-link');
    userEvent.click(catalogLink);
    expect(window.location.pathname).toBe('/SultanShop/catalog');
  });
});
