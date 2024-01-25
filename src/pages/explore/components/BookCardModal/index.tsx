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
  ReviewButton,
  ReviewInputBox,
} from './styles'
import { Rating } from '@/pages/components/Rating'
import { BookOpen, BookmarkSimple, Check, X } from '@phosphor-icons/react'
import { Review } from '../Review'
import { LoginModal } from '../LoginModal'
import { useState } from 'react'
import { Avatar } from '@/pages/components/Avatar'
import { RatingInput } from '../RatingInput'

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
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const isUserLogged = false

  function handleCloseCommentBox() {
    setIsCommentBoxOpen(false)
  }

  function handleOpenCommentBox() {
    setIsCommentBoxOpen(true)
  }

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
                {isUserLogged ? (
                  <button
                    className={isCommentBoxOpen ? 'no-display' : ''}
                    onClick={handleOpenCommentBox}
                  >
                    Add review
                  </button>
                ) : (
                  <LoginModal />
                )}
              </div>
              {isCommentBoxOpen && isUserLogged && (
                <ReviewInputBox>
                  <div className="top">
                    <div className="user-info">
                      <Avatar
                        avatar="https://github.com/brunaporato.png"
                        variant="card"
                      />
                      Cristofer Rosser
                    </div>
                    <RatingInput
                      onRateChange={(newRate) => setUserRating(newRate)}
                    />
                  </div>
                  <textarea placeholder="Write your review" />
                  <div className="buttons">
                    <ReviewButton variant="green">
                      <Check size={24} />
                    </ReviewButton>
                    <ReviewButton
                      variant="purple"
                      onClick={handleCloseCommentBox}
                    >
                      <X size={24} />
                    </ReviewButton>
                  </div>
                </ReviewInputBox>
              )}
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
