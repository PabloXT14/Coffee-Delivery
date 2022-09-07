import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import * as S from './styles'

export const PAYMENT_METHODS = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodsOptions() {
  return (
    <S.PaymentMethodOptionsContainer>
      {Object.entries(PAYMENT_METHODS).map(([key, { label, icon }]) => (
        <PaymentMethodInput key={label} icon={icon} label={label} />
      ))}
    </S.PaymentMethodOptionsContainer>
  )
}
