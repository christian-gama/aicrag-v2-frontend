import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { withProvider } from '@/helpers'
import { filterActions } from '@/context/models/filter'
import { FormProvider, useForm } from '@/context/models/form'
import { AppDispatch } from '@/context/store'
import { Button } from '@/components/atoms/Button'
import { ChevronIcon } from '@/components/utils/icons'
import { P } from '@/components/utils/texts/P'
import { ControlForm } from '../../organisms/Control'
import * as classes from './stylesheet'
import { filterVars } from './stylesheet'

type FilterProps = {
  height: {
    mobile: string
    tablet: string
    widescreen: string
  }
}

const FilterComponent: React.FC<FilterProps> = ({ height, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { formActions, state } = useForm()

  const dispatch = useDispatch<AppDispatch>()
  const { setFilter, resetFilter } = filterActions

  useEffect(() => {
    dispatch(setFilter(state.form.data))
  }, [state.form.data])

  return (
    <div
      className={classes.filter({
        isOpen
      })}
      style={assignInlineVars(filterVars, { height })}
      data-testid="filter"
    >
      <div
        data-testid="filter-header"
        className={classes.filterHeading}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <P>Filtros</P>

        <div className={classes.filterHeadingIcon}>
          <ChevronIcon direction={isOpen ? 'up' : 'down'} size="xxsm" />
        </div>
      </div>

      <ControlForm
        submitHandler={async () => {
          formActions.resetForm()
          dispatch(resetFilter())
        }}
      >
        <div className={classes.filterBody}>
          {children}

          <Button type="submit" style={{ size: 'max' }} testid="clear-filter">
            Limpar filtros
          </Button>
        </div>
      </ControlForm>
    </div>
  )
}

export const Filter = withProvider<FilterProps>(FormProvider)(FilterComponent)
