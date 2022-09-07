import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import * as S from './styles'

export function SelectedCoffees() {
  return (
    <S.SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <S.DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </S.DetailsContainer>
    </S.SelectedCoffeesContainer>
  )
}
