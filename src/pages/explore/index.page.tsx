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
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Category } from '@prisma/client'
import { NextSeo } from 'next-seo'

export interface BookData {
  author: string
  cover_url: string
  created_at: Date
  id: string
  name: string
  summary: string
  total_pages: number
}

export default function Explore() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  function handleSelectTag(tag: string | null) {
    setSelectedTag(tag)
  }

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await api.get('/categories')
      return data.categories ?? []
    },
  })

  const { data: books } = useQuery<BookData[]>({
    queryKey: ['books', selectedTag],
    queryFn: async () => {
      const { data } = await api.get('/books', {
        params: {
          category: selectedTag,
        },
      })
      return data.books ?? []
    },
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <>
      <NextSeo title="Explore | BookWise" />

      <ExploreContainer>
        <Sidebar />
        <ExploreContent>
          <div className="top">
            <PageTitle>
              <Binoculars size={32} />
              <h1>Explore</h1>
            </PageTitle>
            <SearchInput
              placeholder="Search for books or authors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="tags">
            <Tag
              isSelected={selectedTag === null}
              onClick={() => handleSelectTag(null)}
            >
              All
            </Tag>
            {categories &&
              categories.map((category) => (
                <Tag
                  key={category.id}
                  isSelected={selectedTag === category.id}
                  onClick={() => handleSelectTag(category.id)}
                >
                  {category.name}
                </Tag>
              ))}
          </div>
          <ExploreBooksGrid>
            {filteredBooks &&
              filteredBooks.map((book) => {
                return (
                  <BookCardModal
                    key={`allBooks-${book.id}`}
                    bookId={book.id}
                    small
                  />
                )
              })}
          </ExploreBooksGrid>
        </ExploreContent>
      </ExploreContainer>
    </>
  )
}
