import { Binoculars } from '@phosphor-icons/react'
import { SearchInput } from '../components/SearchInput'
import { Sidebar } from '../components/Sidebar'
import {
  ExploreBooksGrid,
  ExploreContainer,
  ExploreContent,
  PageTitle,
} from './styles'
import { Tag } from './components/Tag'
import { BookCardModal } from '../components/BookCardModal'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

interface BookData {
  author: string
  cover_url: string
  created_at: Date
  id: string
  name: string
  summary: string
  total_pages: number
}

export default function Explore() {
  const [books, setBooks] = useState<BookData[]>()

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('/books')
        const allBooks = data.books
        setBooks(allBooks)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchData()
  }, [])

  console.log(books)
  return (
    <ExploreContainer>
      <Sidebar />
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
          {books &&
            books.map((book) => {
              return (
                <BookCardModal
                  key={`allBooks-${book.id}`}
                  title={book.name}
                  author={book.author}
                  image={book.cover_url}
                  rating={3}
                  category="Computer Science"
                  pages={book.total_pages}
                  explore={true}
                />
              )
            })}
        </ExploreBooksGrid>
      </ExploreContent>
    </ExploreContainer>
  )
}
