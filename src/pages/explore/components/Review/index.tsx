import { Avatar } from '@/pages/components/Avatar'
import { ReviewContainer } from './styles'
import { Rating } from '@/pages/components/Rating'
import { useRouter } from 'next/router'
import { Book, Rating as RatingType, User } from '@prisma/client'
import { getRelativeTimeString } from '@/utils/get-relative-time-string'
import { ReviewWithAuthor } from '@/pages/components/BookCardModal'

export type ReviewWithAuthorAndBook = RatingType & {
  user: User
  book: Book
}

interface ReviewProps {
  review: ReviewWithAuthor
}

export function Review({ review }: ReviewProps) {
  const timeDistance = getRelativeTimeString(
    new Date(review.created_at),
    'en-US',
  )

  const router = useRouter()

  function handleClickAvatar() {
    router.push(`/profile/${review.user_id}`)
  }

  return (
    <ReviewContainer>
      <div className="top">
        <div className="profile-info">
          <Avatar
            onClick={handleClickAvatar}
            avatar={review.user.image || ''}
            variant="card"
          />
          <p>{review.user.name}</p>
          <span>{timeDistance}</span>
        </div>
        <Rating rate={review.rate} />
      </div>
      <p>{review.description}</p>
    </ReviewContainer>
  )
}
