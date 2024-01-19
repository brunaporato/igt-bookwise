import { Sidebar } from '../components/Sidebar'
import { ProfileContainer, ProfileInfos, ProfilePageContent } from './styles'
import { Avatar } from '../components/Avatar'
import { SearchInput } from '../components/SearchInput'
import { ProfileReview } from './components/ProfileReview'

export default function Profile() {
  return (
    <ProfileContainer>
      <Sidebar isSessionActive />
      <ProfilePageContent>
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
      <ProfileInfos>
        <Avatar avatar="https://github.com/brunaporato.png" />
        <h2>Bruna Porato</h2>
        <span>Member since 2019</span>
      </ProfileInfos>
    </ProfileContainer>
  )
}
