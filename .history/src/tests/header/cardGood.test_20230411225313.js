import { render } from '@testing-library/react';
import CardGood from '../../components/cardGood/CardGood';

describe('cardGood', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<CardGood />);
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual(0);
  });
});
