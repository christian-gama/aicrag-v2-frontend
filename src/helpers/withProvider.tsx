import { FC } from 'react'

/* eslint-disable react/display-name */
export const withProvider =
  <T extends unknown>(Provider: FC) =>
    (Component: FC<T>): FC<T> =>
      (props) =>
        (
      <Provider>
        <Component {...props} />
      </Provider>
        )
