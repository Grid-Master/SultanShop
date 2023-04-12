import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header/Header';

describe('рендер данных фирмы', () => {
  it('реднер адресса', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('adress')).toBeInTheDocument();
  });
  it('рендер почтового ящика', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/opt.sultan@mail.ru/i)).toBeInTheDocument();
  });
});
