import { render } from '@testing-library/react';
import Header from '../../components/header/Header';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('opt.sultan@mail.ru')).toBeInTheDocument();
  });
});
