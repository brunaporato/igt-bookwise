import { Avatar } from '@/pages/components/Avatar'
import { ReviewContainer } from './styles'
import { Rating } from '@/pages/components/Rating'
import { useRouter } from 'next/router'

export function Review() {
  const router = useRouter()

  function handleClickAvatar() {
    router.push(`/profile`)
  }
  return (
    <ReviewContainer>
      <div className="top">
        <div className="profile-info">
          <Avatar
            onClick={handleClickAvatar}
            avatar="https://github.com/maykbrito.png"
            variant="card"
          />
          <p>Brandon Botosh</p>
          <span>2 days ago</span>
        </div>
        <Rating rate={4} />
      </div>
      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </ReviewContainer>
  )
}
