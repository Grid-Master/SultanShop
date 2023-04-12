import { render } from '@testing-library/react';
import Header from '../../components/header/Header';
import '@testing-library/jest-dom';

describe('header', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('adress')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/opt.sultan@mail.rsu/i)).toBeInTheDocument();
  });
});
