import { render, screen } from '@testing-library/react'
import { Cities100 } from './cities100'

const continent = {
  content: [
    {
      city: 'fake-city',
      country: 'fake-country-name',
      image: 'fake-image-url',
      flag: 'fake-flag-url'
    }
  ]
} as any

describe('Banner home tests', () => {
  it('should renders', () => {
    render(
      <Cities100 continent={continent} />
    )
    expect(screen.getByText('fake-city')).toBeInTheDocument()
    expect(screen.getByText('fake-country-name')).toBeInTheDocument()
  })
})