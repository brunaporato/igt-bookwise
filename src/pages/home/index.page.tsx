import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { Sidebar } from '../components/Sidebar'
import {
  CardsContainer,
  HomeContainer,
  HomeContent,
  PageTitle,
  PopularBooks,
  Timeline,
  TopSubtitle,
} from './styles'
import { BookCardModal } from '../components/BookCardModal'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user

  async function handleSeeMoreBooks() {
    router.push('/explore')
  }

  return (
    <HomeContainer>
      <Sidebar />
      <HomeContent>
        <div className="timeline">
          <PageTitle>
            <ChartLineUp size={32} className="icon" weight="bold" />
            <h1>Home</h1>
          </PageTitle>

          {!!user && (
            <Timeline>
              <TopSubtitle>
                <p>Your last reading</p>
                <button onClick={handleSeeMoreBooks}>
                  See more <CaretRight weight="bold" />
                </button>
              </TopSubtitle>
              <CardsContainer>
                <BookCardModal
                  title="O Hobbit"
                  author="J.R.R. Tolkien"
                  image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
                  description="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh..."
                  rating={2}
                />
              </CardsContainer>
            </Timeline>
          )}

          <Timeline>
            <TopSubtitle>
              <p>Most recent ratings</p>
            </TopSubtitle>
            <CardsContainer>
              <BookCardModal
                title="Entendendo Algoritmos"
                author="Adjia Galine"
                image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
                description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu..."
                rating={1}
                isReview={true}
              />
              <BookCardModal
                title="O Hobbit"
                author="J.R.R. Tolkien"
                image="https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg"
                description="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh..."
                rating={2}
                isReview={true}
              />
            </CardsContainer>
          </Timeline>
        </div>

        <PopularBooks>
          <TopSubtitle>
            <p>Popular Books</p>
            <button onClick={handleSeeMoreBooks}>
              See more <CaretRight weight="bold" />
            </button>
          </TopSubtitle>
          <CardsContainer>
            <BookCardModal
              small={true}
              title="Entendendo Algoritmos"
              author="Adjia Galine"
              image="https://m.media-amazon.com/images/I/519UnakaarL.jpg"
              rating={3}
            />
            <BookCardModal
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
