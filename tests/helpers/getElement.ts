import { screen } from '@testing-library/react'

const getElement = (testId: string) => screen.getByTestId(testId)

export default getElement
