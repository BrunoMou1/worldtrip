import { render, screen } from '@testing-library/react'
import { Banner } from './banner'

describe('Banner home tests', () => {
  it('should renders', () => {
    render(
      <Banner />
    )
    expect(screen.getByText('Chegou a hora de tirar do papel a viagem que você sempre sonhou.')).toBeInTheDocument()
  })
})