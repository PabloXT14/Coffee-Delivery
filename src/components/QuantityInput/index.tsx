import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
}

export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
  return (
    <S.QuantityInputContainer size={size}>
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
