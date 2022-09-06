import { CompleteOrderForm } from './components/CompleteOrderForm'
import * as S from './styles'

export function CompleteOrder() {
  return (
    <S.CompleteOrderContainer className="container">
      <CompleteOrderForm />
    </S.CompleteOrderContainer>
  )
}
