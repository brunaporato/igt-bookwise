import { Star } from '@phosphor-icons/react'
import { RatingContainer } from './styles'

interface RatingProps {
  rate: number
}

export function Rating({ rate }: RatingProps) {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<Star key={i} weight="fill" />)
    } else {
      stars.push(<Star key={i} />)
    }
  }

  return <RatingContainer>{stars}</RatingContainer>
}
