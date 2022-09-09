import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        <S.InputStyleContainer {...props} ref={ref} />
        {error && <RegularText size="s">{error}</RegularText>}
      </S.InputWrapper>
    )
  },
)
