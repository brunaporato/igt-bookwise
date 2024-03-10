import { Rating } from '@/pages/components/Rating'
import { ReviewContainer, TitleAuthor, TopCard } from './styles'
import { ProfileRating } from '../../[userId]/index.page'

interface ProfileReview {
  review: ProfileRating
}

export function ProfileReview({ review }: ProfileReview) {
  return (
    <ReviewContainer>
      <TopCard>
        <img src={review.book.cover_url} alt="" width={108} height={152} />
        <div className="infos">
          <TitleAuthor>
            <h2>{review.book.name}</h2>
            <span>{review.book.author}</span>
          </TitleAuthor>
          <Rating rate={review.rate} />
        </div>
      </TopCard>
      <p>{review.description}</p>
    </ReviewContainer>
  )
}
