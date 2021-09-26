import { render, screen } from '@testing-library/react'
import { ContinentBanner } from './continentBanner'

const continent = {
  title: 'fake-continent-title'
} as any

describe('Banner home tests', () => {
  it('should renders', () => {
    render(
      <ContinentBanner continent={continent} />
    )
    expect(screen.getByText('fake-continent-title')).toBeInTheDocument()
  })
})