import { Book } from '@prisma/client'
import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import { CardContainer, Content, TitleAuthor, TopSection } from './styles'
import { BookDetails } from '../BookCardModal'

export type BookWithAVGRating = Book & {
  AVGRating: number
  alreadyRead: boolean
}

interface BookCardProps {
  book: BookDetails
  small?: boolean
  isReview?: boolean
  explore?: boolean
}

export function BookCard({
  book,
  small = false,
  isReview = false,
  explore = false,
}: BookCardProps) {
  return (
    <CardContainer isSmall={small} isReview={isReview} isOnExplore={explore}>
      {isReview && (
        <div className="top-review">
          <div className="profile-info">
            <Avatar
              avatar="https://github.com/brunaporato.png"
              variant="card"
            />
            <div>
              <p>Bruna Porato</p>
              <span>Hoje</span>
            </div>
          </div>
          <Rating rate={3} />
        </div>
      )}
      <img src={book.cover_url} alt="" width={108} height={152} />
      <Content isSmall={small} isOnExplore={explore}>
        <div className="top-content">
          <TopSection isReview={isReview}>
            <span className="date">Hoje</span>
            <Rating rate={book.AVGRating} />
          </TopSection>
          <TitleAuthor>
            <h1>{book.name}</h1>
            <span>{book.author}</span>
          </TitleAuthor>
        </div>
        {small ? <></> : <p className="description">{book.summary}</p>}
      </Content>
    </CardContainer>
  )
}
