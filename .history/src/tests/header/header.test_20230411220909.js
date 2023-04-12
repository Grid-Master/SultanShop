import { render } from '@testing-library/react';
import Header from '../../components/header/Header';

describe('header', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByTestId(/opt.sultan@mail.ru/i)).toBeInTheDocument();
  });
});
