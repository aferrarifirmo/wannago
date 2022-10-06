import { render, screen, fireEvent } from '@testing-library/react';
import NoOption from '../components/guestLinkPageOptions/NoOption';
import YesOption from '../components/guestLinkPageOptions/YesOption';
import MaybeOption from '../components/guestLinkPageOptions/MaybeOption';
import { NoButton, YesButton, MaybeButton } from '../components/guestLinkPageOptions/OptionButtons'

test('Renders components', () => {
  render(<NoOption />)
  render(<YesOption />)
  render(<MaybeOption />)
});

test('NoButton: Render, check for text, get button and click on it', () => {
  render(<NoButton />)
  expect(screen.getByText("I can't")).toBeInTheDocument()
  const noBtn = screen.getByTestId("I can't")
  fireEvent.click(noBtn);
})

test('YesButton: Render, check for text, get button and click on it', () => {
  render(<YesButton />)
  expect(screen.getByText('I wannaGo!')).toBeInTheDocument()
  const yesBtn = screen.getByTestId('Yes, I wannaGo')
  fireEvent.click(yesBtn);
})

test('MaybeButton: Render, check for text, get button and click on it', () => {
  render(<MaybeButton />)
  expect(screen.getByText('Maybe')).toBeInTheDocument()
  const maybeBtn = screen.getByTestId('maybe-btn')
  fireEvent.click(maybeBtn);
})