import { RegularText, TitleText } from '../../../../components/Typography'
import * as S from './styles'

export function CoffeeCard() {
  return (
    <S.CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1662940800&Signature=CWabfd-HQ0-x-3ynDIPZI9GVqrqDRwjrpe9II1o4Nrl67HZGcJ8NqCj3DuPvcagSQsNNPG0ixWc7EhzhzgI7MHtI7-aqzsSqRByh6toAMl-AdVo~AuWmDC5GlkTVjxdRjhcCe9PhEA3ZO0SEOJYQ9thwRK1JUASR1nCK6cKnbZcJ4PA4Y6qKSQzg3PlLge3fE9gfsA0Ej4ES-Is4lULPAmsfIUMT3UYhwDJ-4oOVNpx83wDliFP9HA1C~~XuazKZL4POKpvrPxJYjDdnEjZDEqrGu1neqXAkr9cBw9MYh~0dV-9qoRHdffcUfO7BUFvv7ag4oBJOk2CcUsImR8OOmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <S.TagsContainer>
        <S.Tag>tradicional</S.Tag>
        <S.Tag>com leite</S.Tag>
      </S.TagsContainer>

      <S.Name>Expresso Tradicional</S.Name>
      <S.Decription>
        O tradicional café feito com água quente e grãos moídos
      </S.Decription>

      <S.CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
      </S.CardFooter>
    </S.CoffeeCardContainer>
  )
}
