import { StyledButton, StyledInput } from '../components'
import { FormComponentProps } from '../types'
import styled from 'styled-components'
import { pxToRem } from '../utils'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

/**
 * FormComponent - Um componente reutilizável para renderizar formulários
 *
 * Este componente recebe as seguintes props através da interface FormComponentProps:
 * - inputs: Array de propriedades para elementos input (como type, placeholder, onChange, etc)
 * - buttons: Array de propriedades para elementos button (como onClick, disabled, children, etc)
 * - message: Objeto opcional contendo mensagens de feedback (erro ou sucesso)
 *   - type: 'error' ou 'success' para determinar a cor da mensagem
 *   - msg: O texto da mensagem a ser exibido
 *
 * O componente mapeia os arrays de inputs e buttons para renderizar elementos correspondentes,
 * aplicando todas as propriedades fornecidas via spread operator (...inputProps).
 *
 * Se uma mensagem for fornecida, ela será renderizada com cor vermelha para erros
 * ou verde para mensagens de sucesso.
 */
function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props

  return (
    <StyledForm>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {' '}
          n{message.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormComponent
