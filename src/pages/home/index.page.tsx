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
              <BookCard
                title="Entendendo Algoritmos"
                author="Adjia Galine"
                image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
                description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu..."
                rating={1}
              />
              <BookCard
                title="O Hobbit"
                author="J.R.R. Tolkien"
                image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
                description="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh..."
                rating={2}
              />
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
            <BookCard
              small={true}
              title="Entendendo Algoritmos"
              author="Adjia Galine"
              image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
              rating={3}
            />
            <BookCard
              small={true}
              title="O Hobbit"
              author="J.R.R. Tolkien"
              image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
              rating={5}
            />
          </CardsContainer>
        </PopularBooks>
      </HomeContent>
    </HomeContainer>
  )
}
