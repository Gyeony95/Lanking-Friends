import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 랭킹 꼴지 어서오고 header', () => {
  render(<App />);
  const headerElement = screen.getByText(/랭킹 꼴지 어서오고/i);
  expect(headerElement).toBeInTheDocument();
});
