import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { BookCard } from '../components/BookCard'
import { Sidebar } from '../components/Sidebar'
import {
  CardsContainer,
  HomeContainer,
  HomeContent,
  PopularBooks,
  Timeline,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <HomeContent>
        <div className="timeline">
          <div className="title">
            <ChartLineUp size={32} className="icon" weight="bold" />
            <h1>Início</h1>
          </div>

          <Timeline>
            <p>Most recent ratings</p>
            <CardsContainer>
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </CardsContainer>
          </Timeline>
        </div>

        <PopularBooks>
          <div className="top">
            <p>Popular Books</p>
            <button>
              See more <CaretRight weight="bold" />
            </button>
          </div>
          <CardsContainer>
            <BookCard small={true} />
            <BookCard small={true} />
            <BookCard small={true} />
            <BookCard small={true} />
          </CardsContainer>
        </PopularBooks>
      </HomeContent>
    </HomeContainer>
  )
}
