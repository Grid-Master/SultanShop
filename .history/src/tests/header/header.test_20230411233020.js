import { render } from '@testing-library/react';
import Header from '../../components/header/Header';
import '@testing-library/jest-dom';
import App from '../../App';

describe('рендер данных фирмы', () => {
  it('реднер адресса', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('adress')).toBeInTheDocument();
  });
  it('рендер почтового ящика', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/opt.sultan@mail.ru/i)).toBeInTheDocument();
  });
});
