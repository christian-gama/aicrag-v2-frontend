import React, { useState } from 'react'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { CharCounter } from '@/components/atoms/CharCounter'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { P } from '@/components/utils/texts/P'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { formatText } from './formatText'
import * as styles from './stylesheet'

export const Format: React.FC = () => {
  const [hasChanges, setHasChanges] = useState(true)

  const { formActions, state } =
    useForm<{ text: string, formattedText: string }>()

  const submitHandler = async () => {
    const formattedText = formatText(state.form.data.text)
    formActions.setInputValue('formattedText', formattedText)

    try {
      await navigator.clipboard.writeText(formattedText)
      popoverVar.setPopover(
        'Texto copiado para a área de transferência.',
        'success'
      )

      setHasChanges(state.form.data.text !== formattedText)
    } catch (error) {
      popoverVar.setPopover(
        'Não foi possível copiar para a área de transferência',
        'error'
      )
    }
  }

  console.log(hasChanges)

  return (
    <div data-testid="format">
      <P>Formate um texto para os padrões do projeto. </P>
      <P margin="0 0 3rem 0">
        OBS: Nem todas as regras são aplicadas, portanto revise após a
        formatação.
      </P>

      <ControlForm submitHandler={submitHandler}>
        <div className={styles.textInput}>
          <div className={styles.textInputField}>
            <ControlInput
              maxLength={10_000}
              type="textArea"
              label="Texto"
              name="text"
            />
            <CharCounter
              maxLength={10_000}
              value={state.form.data.text || ''}
            />
          </div>

          <div className={styles.textInputButton}>
            <Button
              style={{
                mode: 'outlined'
              }}
              onClick={() => {
                formActions.resetForm()
                setHasChanges(true)
              }}
              type="reset"
            >
              Resetar
            </Button>
            <Button type="submit">Formatar</Button>
          </div>
        </div>

        <div>
          <ControlInput
            type="textArea"
            label="Texto formatado"
            name="formattedText"
            defaultValue={state.form.data.formattedText}
            readOnly
          />

          {!hasChanges && (
            <P>Não houveram alterações.</P>
          )}
        </div>
      </ControlForm>
    </div>
  )
}
