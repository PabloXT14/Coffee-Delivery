import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

export function QuantityInput() {
  return (
    <S.QuantityInputContainer>
      <S.IconWrapper>
        <Minus size={14} weight="fill" />
      </S.IconWrapper>
      <input type="number" readOnly value={1} />
      <S.IconWrapper>
        <Plus size={14} weight="fill" />
      </S.IconWrapper>
    </S.QuantityInputContainer>
  )
}
