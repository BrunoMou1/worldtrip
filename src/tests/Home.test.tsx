import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useRouter } from 'next/router'
import Home from '../pages/index'
import { Swiper, SwiperSlide } from 'swiper/react';

const results = [
  {
    slug: 'fake-slug',
    title: 'fake-title',
    banner: 'fake-url-banner',
    description: 'fake-description'
  }
]

describe('Banner home tests', () => {
  it('should renders', () => {
    render(
      <Home results={results} />
    )

    expect(screen.getByText('Vamos Nessa?', {exact: false})).toBeInTheDocument()
  })
})