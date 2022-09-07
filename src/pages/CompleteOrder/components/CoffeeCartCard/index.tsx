import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { formatMoney } from '../../../../utils/formatMoney'
import * as S from './styles'

export function CoffeeCartCard() {
  const formattedPrice = formatMoney(9.9)

  return (
    <S.CoffeeCartCardContainer>
      <div>
        <img src="/coffees/tradicional.png" alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <S.ActionsContainer>
            <QuantityInput size="small" />
            <S.RemoveButton>
              <Trash size={16} />
              REMOVER
            </S.RemoveButton>
          </S.ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </S.CoffeeCartCardContainer>
  )
}
