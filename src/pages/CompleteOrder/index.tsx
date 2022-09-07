import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as S from './styles'

export function CompleteOrder() {
  return (
    <S.CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </S.CompleteOrderContainer>
  )
}
