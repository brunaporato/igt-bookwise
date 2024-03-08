import { BookCard, BookWithAVGRating } from '@/pages/components/BookCard'
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
import { Review } from '../../explore/components/Review'
import { LoginModal } from '../../explore/components/LoginModal'
import { useState } from 'react'
import { Avatar } from '@/pages/components/Avatar'
import { RatingInput } from '../../explore/components/RatingInput'
import {
  CategoriesOnBooks,
  Category,
  Rating as RatingType,
  User,
} from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export type ReviewWithAuthor = RatingType & {
  user: User
}

export type BookDetails = BookWithAVGRating & {
  ratings: ReviewWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

interface BookCardModalProps {
  bookId: string
}

export function BookCardModal({ bookId }: BookCardModalProps) {
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const isUserLogged = false

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`)
      return data?.book ?? {}
    },
  })

  const sortedBookReviews = book?.ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const categories =
    book?.categories.map((X) => X.category.name).join(', ') ?? ''

  function handleCloseCommentBox() {
    setIsCommentBoxOpen(false)
  }

  function handleOpenCommentBox() {
    setIsCommentBoxOpen(true)
  }

  return (
    <BookCardModalContainer>
      {book && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="Button violet">
              <BookCard book={book} small explore />
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
                  <img src={book.cover_url} alt="" height={242} />
                  <div className="infos">
                    <div className="title-author">
                      <h2>{book.name}</h2>
                      <span>{book.author}</span>
                    </div>
                    <div className="rating">
                      <Rating rate={book.AVGRating} />
                      <span>
                        {sortedBookReviews && sortedBookReviews?.length > 1
                          ? `${sortedBookReviews?.length} avaliações`
                          : `${sortedBookReviews?.length} avaliação`}
                      </span>
                    </div>
                  </div>
                </section>
                <div className="more-info">
                  <MoreInfoItem>
                    <BookmarkSimple size={24} weight="bold" />
                    <div>
                      <span>Category</span>
                      <p>{categories}</p>
                    </div>
                  </MoreInfoItem>
                  <MoreInfoItem>
                    <BookOpen size={24} weight="bold" />
                    <div>
                      <span>Pages</span>
                      <p>{book.total_pages}</p>
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
                  {sortedBookReviews &&
                    sortedBookReviews.map((rating) => {
                      return <Review key={rating.id} review={rating} />
                    })}
                </div>
              </CommentsBox>
            </DialogBox>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </BookCardModalContainer>
  )
}
