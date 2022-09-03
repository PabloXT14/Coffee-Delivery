import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import * as S from './styles'

export function OurCoffees() {
  return (
    <S.OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <S.CoffeeList>
        <CoffeeCard />
      </S.CoffeeList>
    </S.OurCoffeeContainer>
  )
}
