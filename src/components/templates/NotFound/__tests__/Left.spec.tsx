import { useWindowDimensions } from '@/components/_hooks'
import { renderWithProviders, setupTests } from '@/tests/helpers'
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
  setupTests()

  afterEach(() => {
    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 521, height: 520 })
  })

  it('renders correctly', async () => {
    await renderWithProviders(<Left />)

    expect(mockLogoIcon).toHaveBeenCalled()
  })

  it('renders smaller logo if view width is lesser or equal to 520', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520 })
    await renderWithProviders(<Left />)

    expect(mockLogoIcon).toHaveBeenCalledWith({ size: 'md', color: 'white' })
  })
})
