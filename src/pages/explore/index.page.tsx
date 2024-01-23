import { Binoculars } from '@phosphor-icons/react'
import { BookCard } from '../components/BookCard'
import { SearchInput } from '../components/SearchInput'
import { Sidebar } from '../components/Sidebar'
import {
  ExploreBooksGrid,
  ExploreContainer,
  ExploreContent,
  PageTitle,
} from './styles'
import { Tag } from './components/Tag'
import { BookCardModal } from './components/BookCardModal'

export default function Explore() {
  return (
    <ExploreContainer>
      <Sidebar isSessionActive />
      <ExploreContent>
        <div className="top">
          <PageTitle>
            <Binoculars size={32} />
            <h1>Explore</h1>
          </PageTitle>
          <SearchInput placeholder="Search for books or authors" />
        </div>
        <div className="tags">
          <Tag isSelected>All</Tag>
          <Tag>Computer</Tag>
          <Tag>Education</Tag>
          <Tag>Fantasy</Tag>
        </div>
        <ExploreBooksGrid>
          <BookCardModal
            title="Entendendo Algoritmos"
            author="Adjia Galine"
            image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
            rating={3}
            description=""
            category="Computer Science"
            pages={120}
          />
          <BookCard
            explore={true}
            title="O Hobbit"
            author="J.R.R. Tolkien"
            image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
            rating={5}
          />
          <BookCard
            explore={true}
            title="Entendendo Algoritmos"
            author="Adjia Galine"
            image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
            rating={3}
          />
          <BookCard
            explore={true}
            title="O Hobbit"
            author="J.R.R. Tolkien"
            image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
            rating={5}
          />
          <BookCard
            explore={true}
            title="Entendendo Algoritmos"
            author="Adjia Galine"
            image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
            rating={3}
          />
          <BookCard
            explore={true}
            title="O Hobbit"
            author="J.R.R. Tolkien"
            image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
            rating={5}
          />
          <BookCard
            explore={true}
            title="Entendendo Algoritmos"
            author="Adjia Galine"
            image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
            rating={3}
          />
          <BookCard
            explore={true}
            title="O Hobbit"
            author="J.R.R. Tolkien"
            image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
            rating={5}
          />
        </ExploreBooksGrid>
      </ExploreContent>
    </ExploreContainer>
  )
}
