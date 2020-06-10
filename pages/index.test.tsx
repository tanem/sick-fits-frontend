import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '.'

test('renders Home', () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})
