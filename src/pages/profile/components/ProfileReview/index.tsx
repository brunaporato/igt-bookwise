import { Rating } from '@/pages/components/Rating'
import { ReviewContainer, TitleAuthor, TopCard } from './styles'

interface ProfileReview {
  image: string
  title: string
  author: string
  rating: number
  description: string
}

export function ProfileReview({
  image,
  title,
  author,
  description,
  rating,
}: ProfileReview) {
  return (
    <ReviewContainer>
      <TopCard>
        <img src={image} alt="" width={108} height={152} />
        <div className="infos">
          <TitleAuthor>
            <h2>{title}</h2>
            <span>{author}</span>
          </TitleAuthor>
          <Rating rate={rating} />
        </div>
      </TopCard>
      <p>{description}</p>
    </ReviewContainer>
  )
}
