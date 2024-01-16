import Image from 'next/image'
import { CardContainer, Content, TitleAuthor, TopSection } from './styles'
import { Star } from '@phosphor-icons/react'

export function BookCard() {
  return (
    <CardContainer>
      <Image
        src="https://m.media-amazon.com/images/I/517I6z9QK4L._SY445_SX342_.jpg"
        alt=""
        width={108}
        height={152}
      />
      <Content>
        <div className="date-rating">
          <TopSection>
            <span>Hoje</span>
            <div className="rating">
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
              <Star />
              <Star />
            </div>
          </TopSection>
          <TitleAuthor>
            <h1>Entendendo Algoritmos</h1>
            <span>Aditya Bhargava</span>
          </TitleAuthor>
        </div>
        <p className="description">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </Content>
    </CardContainer>
  )
}
