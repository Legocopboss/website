import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './components/header/Header'

test('renders main header', () => {
  render(<Header />)
  const heading = screen.getByText(/Braden Pool/i)
  expect(heading).toBeInTheDocument()
})
