import { Star } from '@phosphor-icons/react'
import { useState } from 'react'
import { RatingStars } from './styles'

interface StarProps {
  filled: boolean
  onClick?: () => void
}

export function StarComponent({ filled, onClick }: StarProps) {
  const StarElement = filled ? (
    <Star weight="fill" size={28} />
  ) : (
    <Star size={28} />
  )

  return <RatingStars onClick={onClick}>{StarElement}</RatingStars>
}

interface RatingInputProps {
  onRateChange?: (newRate: number) => void
}

export function RatingInput({ onRateChange }: RatingInputProps) {
  const [selectedRate, setSelectedRate] = useState(0)

  const handleStarClick = (clicked: number) => {
    if (onRateChange) {
      setSelectedRate(clicked)
      onRateChange(clicked)
    }
  }

  const stars = []

  for (let i = 1; i <= 5; i++) {
    const filled = i <= selectedRate

    stars.push(
      <StarComponent
        key={i}
        filled={filled}
        onClick={() => handleStarClick(i)}
      />,
    )
  }

  return <div>{stars}</div>
}
