import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page without crashing', () => {
  render(<App />);
  const titleElement = screen.getByText(/Top 100 Coins/i);
  expect(titleElement).toBeInTheDocument();
});
