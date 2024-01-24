import { BookCard } from '@/pages/components/BookCard'
import * as Dialog from '@radix-ui/react-dialog'
import {
  BookCardModalContainer,
  CommentsBox,
  DialogBookInfos,
  DialogBox,
  DialogClose,
  DialogOverlay,
  MoreInfoItem,
} from './styles'
import { Rating } from '@/pages/components/Rating'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { Review } from '../Review'
import { LoginModal } from '../LoginModal'

interface BookCardModalProps {
  title: string
  author: string
  description: string
  image: string
  rating: number
  category: string
  pages: number
}

export function BookCardModal({
  title,
  author,
  image,
  rating,
  category,
  pages,
}: BookCardModalProps) {
  const isUserLogged = false

  return (
    <BookCardModalContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button violet">
            <BookCard
              title={title}
              author={author}
              image={image}
              rating={rating}
              explore
            />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogBox>
            <DialogClose>
              <X size={24} weight="bold" />
            </DialogClose>
            <DialogBookInfos>
              <section className="top">
                <img src={image} alt="" height={242} />
                <div className="infos">
                  <div className="title-author">
                    <h2>{title}</h2>
                    <span>{author}</span>
                  </div>
                  <div className="rating">
                    <Rating rate={rating} />
                    <span>3 avaliações</span>
                  </div>
                </div>
              </section>
              <div className="more-info">
                <MoreInfoItem>
                  <BookmarkSimple size={24} weight="bold" />
                  <div>
                    <span>Category</span>
                    <p>{category}</p>
                  </div>
                </MoreInfoItem>
                <MoreInfoItem>
                  <BookOpen size={24} weight="bold" />
                  <div>
                    <span>Pages</span>
                    <p>{pages}</p>
                  </div>
                </MoreInfoItem>
              </div>
            </DialogBookInfos>
            <CommentsBox>
              <div className="title">
                <h2>Reviews</h2>
                {isUserLogged ? <a href="#">Add review</a> : <LoginModal />}
              </div>
              <div className="list">
                <Review />
              </div>
            </CommentsBox>
          </DialogBox>
        </Dialog.Portal>
      </Dialog.Root>
    </BookCardModalContainer>
  )
}
