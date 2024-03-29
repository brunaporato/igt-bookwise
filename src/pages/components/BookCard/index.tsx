import { Book } from '@prisma/client'
import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import { CardContainer, Content, TitleAuthor, TopSection } from './styles'
import { BookDetails } from '../BookCardModal'
import { useSession } from 'next-auth/react'
import { ReviewWithAuthorAndBook } from '../Review'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export type BookWithAVGRating = Book & {
  AVGRating: number
  alreadyRead: boolean
}

interface BookCardProps {
  book?: BookDetails
  review?: ReviewWithAuthorAndBook
  small?: boolean
  isReview?: boolean
  explore?: boolean
}

dayjs.extend(relativeTime)

export function BookCard({
  book,
  review,
  small = false,
  isReview = false,
  explore = false,
}: BookCardProps) {
  const { data } = useSession()
  let user
  let timeDistance

  if (review) {
    user = review.user
    timeDistance = dayjs(review.created_at).fromNow()
  } else {
    user = data?.user
  }

  const { data: bookData } = useQuery<BookDetails>({
    queryKey: ['book', review?.book_id],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${review?.book_id}`)
      return data?.book ?? {}
    },
    enabled: !!review,
  })

  const bookDetails = book || bookData

  return (
    <CardContainer isSmall={small} isReview={isReview} isOnExplore={explore}>
      {isReview && (
        <div className="top-review">
          <div className="profile-info">
            <Avatar avatar={user?.image} variant="card" />
            <div>
              <p>{user?.name}</p>
              <span>{timeDistance}</span>
            </div>
          </div>
          <Rating rate={3} />
        </div>
      )}
      {bookDetails && (
        <>
          <img src={bookDetails.cover_url} alt="" width={108} height={152} />
          <Content isSmall={small} isOnExplore={explore}>
            <div className="top-content">
              <TopSection isReview={isReview}>
                <span className="date">{timeDistance}</span>
                <Rating rate={bookDetails.AVGRating} />
              </TopSection>
              <TitleAuthor>
                <h1>{bookDetails.name}</h1>
                <span>{bookDetails.author}</span>
              </TitleAuthor>
            </div>
            {!small &&
              (isReview ? (
                <p className="description">{review?.description}</p>
              ) : (
                <p className="description">{bookDetails.summary}</p>
              ))}
          </Content>
        </>
      )}
    </CardContainer>
  )
}
