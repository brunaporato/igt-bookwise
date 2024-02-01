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
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'

interface UserData {
  created_at: Date
  image: string
  name: string
  id: string
}

export default function Profile() {
  const [user, setUser] = useState<UserData>()

  const router = useRouter()
  const { userId } = router.query

  const { data: session } = useSession()

  const memberJoinYear = user && dayjs(user.created_at).year()

  function handleReturnPage() {
    router.back()
  }

  useEffect(() => {
    async function fetchData() {
      if (userId !== 'me') {
        try {
          const { data } = await api.get(`/users?userId=${userId}`)
          const userData = data.user
          setUser(userData)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      } else {
        try {
          const { data } = await api.get(
            `/users?userEmail=${session?.user?.email}`,
          )
          const userData = data.user
          setUser(userData)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    }

    fetchData()
  }, [session?.user?.email, userId])

  return (
    <ProfileContainer>
      <Sidebar />
      <ProfilePageContent>
        {userId === 'me' ? (
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

        <SearchInput placeholder="Search reviews" />
        <div className="reviews">
          <div className="post">
            <span>2 days ago</span>
            <ProfileReview
              image={'https://m.media-amazon.com/images/I/519UnakaarL.jpg'}
              title={'Entendendo Algoritmos'}
              author={'Aditya Bhargava'}
              rating={4}
              description="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            />
          </div>
        </div>
      </ProfilePageContent>
      <ProfileBox>
        <ProfileInfos>
          <Avatar avatar={String(user?.image)} variant="profile" />
          <div>
            <h2>{user?.name}</h2>
            <span>Member since {memberJoinYear}</span>
          </div>
        </ProfileInfos>
        <div className="decoration"></div>
        <ProfileData>
          <ProfileDataItem>
            <BookOpen size={32} />
            <div>
              <p>3853</p>
              <span>Pages read</span>
            </div>
          </ProfileDataItem>
          <ProfileDataItem>
            <Books size={32} />
            <div>
              <p>10</p>
              <span>Books rated</span>
            </div>
          </ProfileDataItem>
          <ProfileDataItem>
            <UserList size={32} />
            <div>
              <p>8</p>
              <span>Authors read</span>
            </div>
          </ProfileDataItem>
          <ProfileDataItem>
            <BookmarkSimple size={32} />
            <div>
              <p>Computer Science</p>
              <span>Most read category</span>
            </div>
          </ProfileDataItem>
        </ProfileData>
      </ProfileBox>
    </ProfileContainer>
  )
}
