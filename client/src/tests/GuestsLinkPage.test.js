import { render , screen} from '@testing-library/react';
import GuestLink from '../pages/GuestsLinkPage';

test('Renders all options buttons', () => {
  render(<GuestLink />)
  expect(screen.getByText("I can't")).toBeInTheDocument()
  expect(screen.getByText('I wannaGo!')).toBeInTheDocument()
  expect(screen.getByText('Maybe')).toBeInTheDocument()
  expect(screen.getByText('wants to know if you wannaGo')).toBeInTheDocument()
})