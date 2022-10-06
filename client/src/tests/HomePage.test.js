import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../pages/HomePage';
import {BrowserRouter as Router} from 'react-router-dom';

test('Render the page with expected content', () => {
  render(<Router><MainPage /></Router>)
  expect(screen.getByText('Create a plan. Share it!')).toBeInTheDocument()
  expect(screen.getByText('Plan it!')).toBeInTheDocument()
}) 

test('Render, get button and click on it', () => {
  render(<Router><MainPage /></Router>)
  const planItBtn = screen.getByTestId('plan-it-button')
  fireEvent.click(planItBtn);
})

test('Logo in home page', () => {
  render(<Router><MainPage /></Router>)
  screen.getByTestId('logo')
})