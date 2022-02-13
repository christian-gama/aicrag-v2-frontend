import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Optional } from '@/helpers'
import { FilterStates, filterActions } from '@/context/models/filter'
import { AppDispatch, RootState } from '@/context/store'
import { ChevronIcon } from '@/components/utils/icons'

export const useTFilter = <T extends { [key: string]: unknown }>() => {
  const [asc, setAsc] = useState<{ [key: string]: Boolean }>({})

  const dispatch = useDispatch<AppDispatch>()
  const { filters } = useSelector<RootState, FilterStates<Optional<T>>>(
    (state) => state.filter
  )
  const { setFilter } = filterActions

  const sortHandler = (field: string, ascSort: string) => {
    setAsc((asc) => {
      dispatch(
        setFilter({
          sort: asc[field] ? ascSort.replace(/-/g, '') : `-${ascSort}`
        })
      )

      return { [field]: !asc[field] }
    })
  }

  const printFieldWithArrow = (description: string, field: string) => {
    const Chevron = (
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        {description}

        {asc[field] !== undefined
          ? (
          <ChevronIcon
            direction={asc[field] ? 'down' : 'up'}
            size="xxsm"
            color="white"
          />
            )
          : null}
      </div>
    )

    return Chevron
  }

  return {
    printFieldWithArrow,
    sortHandler,
    filters,
    setAsc,
    asc
  }
}
