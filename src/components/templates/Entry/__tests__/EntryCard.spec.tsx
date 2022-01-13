import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import EntryCard from '../EntryCard'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

const makeSut = () => {
  return render(
    <MockedProvider>
      <MemoryRouter initialEntries={['/entry/sign-up']}>
        <Routes>
          <Route path="/entry/sign-up" element={<EntryCard />} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  )
}

describe('EntryCard', () => {
  afterEach(() => {
    cleanup()

    jest.clearAllMocks()
  })

  it('should render EntryCard correctly', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })

    makeSut()

    const entryCard = screen.getByTestId('entry-card')

    expect(entryCard).toBeInTheDocument()
  })

  it('should render with border if width is greater than 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 500 })

    makeSut()

    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 3px')
  })

  it('should render with no border if width is lesser than 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 500, height: 500 })

    makeSut()

    const card = screen.getByTestId('card')

    expect(card).toHaveStyle('border-radius: 0')
  })
})
