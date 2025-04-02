// InputProps herda todas as propriedades nativas de um input HTML
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

// ButtonProps herda todas as propriedades nativas de um botão HTML
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButton>

// MessageProps define a estrutura de mensagens com:
// - msg: texto da mensagem
// - type: tipo da mensagem (erro ou sucesso)
export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

// FormComponentProps define a estrutura do componente de formulário com:
// - inputs: array de inputs com propriedades HTML
// - buttons: array de botões com propriedades HTML
// - message: objeto opcional de mensagem
export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
// Utilizamos interfaces TypeScript para definir contratos claros entre componentes.
// Isso traz vários benefícios:
// 1. Autocompletar e validação em tempo de desenvolvimento
// 2. Documentação integrada ao código
// 3. Segurança de tipos, evitando erros comuns
// 4. Facilita refatorações futuras
