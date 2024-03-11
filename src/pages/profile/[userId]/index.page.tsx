import { Sidebar } from '../../components/Sidebar'
import {
  PageTitle,
  ProfileBox,
  ProfileContainer,
  ProfileData,
  ProfileDataItem,
  ProfileInfos,
  ProfilePageContent,
  ReturnPage,
} from './styles'
import { Avatar } from '../../components/Avatar'
import { SearchInput } from '../../components/SearchInput'
import { ProfileReview } from '../components/ProfileReview'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from '@phosphor-icons/react'
import { api } from '@/lib/axios'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export interface ProfileRating extends Rating {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

interface UserData {
  ratings: ProfileRating[]
  user: {
    image: string
    name: string
    created_at: Date
    email: string
  }
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

export default function Profile() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const { data: session } = useSession()
  const userId = router.query.userId as string

  const { data: user } = useQuery<UserData>({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data } = await api.get(`/users?userId=${userId}`)
      return data.user ?? {}
    },
    enabled: !!userId,
  })

  const isOwnProfile = session?.user?.email === user?.user.email

  const memberJoinYear = user && dayjs(user.user.created_at).year()

  const filteredReviews = useMemo(() => {
    return user?.ratings.filter((rating) => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [user?.ratings, search])

  function handleReturnPage() {
    router.back()
  }

  return (
    <ProfileContainer>
      <Sidebar />
      <ProfilePageContent>
        {isOwnProfile ? (
          <PageTitle>
            <User size={32} />
            <h1>Profile</h1>
          </PageTitle>
        ) : (
          <ReturnPage onClick={handleReturnPage}>
            <CaretLeft weight="bold" size={20} />
            Voltar
          </ReturnPage>
        )}

        <SearchInput
          placeholder="Search reviews"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="reviews">
          {filteredReviews
            ? filteredReviews.map((review) => {
                return (
                  <div className="post" key={review.id}>
                    <span>{dayjs(review.created_at).fromNow()}</span>
                    <ProfileReview review={review} />
                  </div>
                )
              })
            : search
              ? 'No results were found'
              : 'Reviews are still empty'}
        </div>
      </ProfilePageContent>
      <ProfileBox>
        <ProfileInfos>
          <Avatar avatar={user?.user.image} variant="profile" />
          <div>
            <h2>{user?.user.name}</h2>
            <span>Member since {memberJoinYear}</span>
          </div>
        </ProfileInfos>
        <div className="decoration"></div>
        <ProfileData>
          <ProfileDataItem>
            <BookOpen size={32} />
            <div>
              <p>{user?.readPages}</p>
              <span>Pages read</span>
            </div>
          </ProfileDataItem>
          <ProfileDataItem>
            <Books size={32} />
            <div>
              <p>{user?.ratedBooks}</p>
              <span>Books rated</span>
            </div>
          </ProfileDataItem>
          <ProfileDataItem>
            <UserList size={32} />
            <div>
              <p>{user?.readAuthors}</p>
              <span>Authors read</span>
            </div>
          </ProfileDataItem>
          <ProfileDataItem>
            <BookmarkSimple size={32} />
            <div>
              <p>{user?.mostReadCategory}</p>
              <span>Most read category</span>
            </div>
          </ProfileDataItem>
        </ProfileData>
      </ProfileBox>
    </ProfileContainer>
  )
}
