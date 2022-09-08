import { RegularText, TitleText } from '../../components/Typography'
import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import * as S from './styles'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export function OrderConfirmed() {
  const { colors } = useTheme()

  return (
    <S.OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <S.OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText color="text">
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText color="text">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText color="text">
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </S.OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </S.OrderConfirmedContainer>
  )
}
