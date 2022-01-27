import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import EntryCard from '../EntryCard'

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('EntryCard', () => {
  afterEach(() => {
    cleanup()

    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })
  })

  it('renders correctly', () => {
    renderWithProviders(<EntryCard />)

    const entryCard = screen.getByTestId('entry-card')

    expect(entryCard).toBeInTheDocument()
  })

  it('renders with no border if width is lesser or equal to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520 })
    renderWithProviders(<EntryCard />)

    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
