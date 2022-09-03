import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer className="container">
      <div>
        <img src={coffeeDeliveryLogo} alt="" />
        <S.HeaderButtonsContainer>
          <S.HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </S.HeaderButton>
          <S.HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </S.HeaderButton>
        </S.HeaderButtonsContainer>
      </div>
    </S.HeaderContainer>
  )
}
