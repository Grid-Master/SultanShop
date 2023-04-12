import { render } from '@testing-library/react';
import CardGood from '../../components/cardGood/CardGood';
import Header from '../../components/header/Header';

describe('cardGood', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('adress')).toBeInTheDocument();
  });
});
