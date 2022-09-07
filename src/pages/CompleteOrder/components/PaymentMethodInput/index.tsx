import { ReactNode } from 'react'
import * as S from './styles'

type PaymentMethodInputProps = {
  label: string
  icon: ReactNode
}

export function PaymentMethodInput({ label, icon }: PaymentMethodInputProps) {
  const randomId = Math.floor(Date.now() * Math.random()).toString(36)

  return (
    <S.PaymentMethodInputContainer>
      <input id={randomId} type="radio" name="paymentMethod" />
      <label htmlFor={randomId}>
        <S.ContentContainer>
          {icon}
          {label}
        </S.ContentContainer>
      </label>
    </S.PaymentMethodInputContainer>
  )
}
