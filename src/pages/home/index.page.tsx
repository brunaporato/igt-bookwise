import { BookCard } from '../components/BookCard'
import { Sidebar } from '../components/Sidebar'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <BookCard />
    </HomeContainer>
  )
}
