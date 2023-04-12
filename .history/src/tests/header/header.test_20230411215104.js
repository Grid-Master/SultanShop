import { render } from 'react-dom';
import Header from '../../components/header/Header';

describe('header', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('opt.sultan@mail.ru')).toBeInTheDocument();
  });
});
