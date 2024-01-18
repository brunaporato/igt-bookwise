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
}

export function BookCard({
  small = false,
  image,
  title,
  author,
  date,
  description,
  rating,
}: BookCardProps) {
  console.log(image)
  return (
    <CardContainer isSmall={small}>
      <img src={image} alt="" width={108} height={152} />
      <Content isSmall={small}>
        <div className="date-rating">
          <TopSection>
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
