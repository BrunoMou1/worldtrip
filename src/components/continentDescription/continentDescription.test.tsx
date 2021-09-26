import { render, screen } from '@testing-library/react'
import { ContinentDescription } from './continentDescription'

const continent = {
  description: 'fake-continent-description',
  cities: '100',
  languages: '10',
  cities100: '5'
} as any

describe('Banner home tests', () => {
  it('should renders', () => {
    render(
      <ContinentDescription continent={continent} />
    )
    expect(screen.getByText('fake-continent-description')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })
})