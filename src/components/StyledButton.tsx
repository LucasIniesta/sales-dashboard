import styled from 'styled-components'
import { ButtonProps } from '../types'
import { pxToRem } from '../utils'

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${pxToRem(8)};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${pxToRem(16)};
  font-weight: bold;
  height: ${pxToRem(50)};
  padding: 0 ${pxToRem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};
    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  &.alert {
    background-color: ${(props) => props.theme.buttons.alert};
    color: ${(props) => props.theme.buttons.alertColor};
    &:hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &.borderless-alert {
    background-color: none;
    color: ${(props) => props.theme.buttons.alert};
    padding: 0;
    height: 0;
    &:hover {
      color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.disabled};
    }
  }
`
/*
  Explicação detalhada da implementação do StyledButton:

  1. Uso do styled-components:
     - Permite escrever CSS dentro do arquivo TypeScript, proporcionando
       melhor organização e modularização do código.

  2. Prop ButtonProps:
     - Define as propriedades que o componente StyledButton pode receber,
       garantindo maior segurança de tipos e previsibilidade no comportamento.

  3. Estilização e temas:
     - A propriedade theme permite acessar estilos definidos globalmente para
       os botões (cores primárias, alertas, hover, etc.). Dessa forma, todas
       as instâncias do StyledButton podem compartilhar estilos consistentes.

  4. Modificadores de classe:
     - primary, alert e borderless-alert são definições de classe que,
       quando aplicadas ao componente, alteram o estilo, fornecendo maior
       flexibilidade no design do botão.

  5. Desabilitado:
     - Quando disabled, o botão tem estilos específicos para indicar sua
       indisponibilidade e muda o cursor para 'not-allowed'.

  Este comentário fornece detalhes sobre a forma como o StyledButton é criado
  e estilizado, ajudando na manutenção e compreensão futura do código.
*/
