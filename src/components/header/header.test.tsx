import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useRouter } from 'next/router'
import { Header } from './header'

jest.mock('next/router')

describe('Banner home tests', () => {
  const useRouterMocked = mocked(useRouter)
  const pushMocked = jest.fn()

  useRouterMocked.mockReturnValueOnce({
    push: pushMocked
  } as any)

  it('should renders', () => {
    render(
      <Header />
    )

    const icon = screen.getByTitle('iconBack')
    fireEvent.click(icon)
    expect(pushMocked).toHaveBeenCalledWith('/')
  })
})