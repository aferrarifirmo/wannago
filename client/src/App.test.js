import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const view = screen.getByText('wannago');
  expect(view).toBeInTheDocument();
});
