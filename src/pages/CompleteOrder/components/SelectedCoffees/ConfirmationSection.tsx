import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { formatMoney } from '../../../../utils/formatMoney'
import * as S from './styles'

export function ConfirmationSection() {
  return (
    <S.ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatMoney(29.7)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatMoney(3.5)}</RegularText>
      </div>
      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formatMoney(33.2)}
        </RegularText>
      </div>
      <Button text="Confirmar Pedido" />
    </S.ConfirmationSectionContainer>
  )
}
