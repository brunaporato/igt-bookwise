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
import { useQuery } from '@tanstack/react-query'
import { ReviewWithAuthorAndBook } from '../components/Review'
import { api } from '@/lib/axios'
import { BookCard } from '../components/BookCard'
import { Book } from '@prisma/client'

export type PopularBooksWithAVGRating = Book & {
  avgRating: number
}

export default function Home() {
  const router = useRouter()

  const { data: session } = useSession()

  const userEmail = session?.user?.email

  const { data: userData } = useQuery({
    queryKey: ['users', userEmail],
    queryFn: async () => {
      return await api.get('/users', {
        params: {
          userEmail,
        },
      })
    },
  })

  let userId = null

  if (userData) {
    userId = userData?.data.user.id
  }

  const { data: lastUserReview } = useQuery<ReviewWithAuthorAndBook>({
    queryKey: ['latest-user-review', userId],
    queryFn: async () => {
      const { data } = await api.get('/reviews/user-latest')
      return data.review ?? null
    },
    enabled: !!userId,
  })

  const { data: lastReviews } = useQuery<ReviewWithAuthorAndBook[]>({
    queryKey: ['latest-reviews'],
    queryFn: async () => {
      const { data } = await api.get('/reviews/latest')
      return data.reviews ?? []
    },
  })

  const { data: popularBooks } = useQuery<PopularBooksWithAVGRating[]>({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const { data } = await api.get('/books/popular-books')
      return data.popularBooks ?? []
    },
  })

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

          {!!lastUserReview && (
            <Timeline>
              <TopSubtitle>
                <p>Your last reading</p>
                <button onClick={handleSeeMoreBooks}>
                  See more <CaretRight weight="bold" />
                </button>
              </TopSubtitle>
              <CardsContainer>
                <BookCard review={lastUserReview} />
              </CardsContainer>
            </Timeline>
          )}

          <Timeline>
            <TopSubtitle>
              <p>Most recent ratings</p>
            </TopSubtitle>
            <CardsContainer>
              {lastReviews &&
                lastReviews.map((review) => {
                  return <BookCard key={review.id} review={review} isReview />
                })}
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
            {popularBooks &&
              popularBooks.map((book) => {
                return (
                  <BookCardModal key={book.id} small={true} bookId={book.id} />
                )
              })}
          </CardsContainer>
        </PopularBooks>
      </HomeContent>
    </HomeContainer>
  )
}
