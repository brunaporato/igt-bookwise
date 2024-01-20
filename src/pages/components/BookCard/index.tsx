import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import { CardContainer, Content, TitleAuthor, TopSection } from './styles'

interface BookCardProps {
  small?: boolean
  image: string
  title: string
  author: string
  rating: number
  date?: string
  description?: string
  isReview?: boolean
  explore?: boolean
}

export function BookCard({
  small = false,
  image,
  title,
  author,
  description,
  rating,
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
      <img src={image} alt="" width={108} height={152} />
      <Content isSmall={small} isOnExplore={explore}>
        <div className="top-content">
          <TopSection isReview={isReview}>
            <span className="date">Hoje</span>
            <Rating rate={rating} />
          </TopSection>
          <TitleAuthor>
            <h1>{title}</h1>
            <span>{author}</span>
          </TitleAuthor>
        </div>
        {small ? <></> : <p className="description">{description}</p>}
      </Content>
    </CardContainer>
  )
}
