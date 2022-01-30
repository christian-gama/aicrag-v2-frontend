import { cleanup } from '@testing-library/react'
import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders } from '@/tests/helpers'
import { Left } from '../Left'

const mockLogoIcon = jest.fn()
jest.mock('../../../utils/icons', () => ({
  LogoIcon: (props: any) => {
    mockLogoIcon(props)
    return null
  }
}))

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Left', () => {
  afterEach(() => {
    cleanup()
    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 520 })
  })

  it('renders correctly', () => {
    renderWithProviders(<Left />)

    expect(mockLogoIcon).toHaveBeenCalled()
  })

  it('renders smaller logo if view width is lesser or equal to 520', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520 })
    renderWithProviders(<Left />)

    expect(mockLogoIcon).toHaveBeenCalledWith({ size: 'md', color: 'white' })
  })
})
