import { render } from '@testing-library/react';
import Header from '../../components/header/Header';
import '@testing-library/jest-dom';

describe('cardGood', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('adress')).toBeInTheDocument();
  });
});
