import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  width: '100%',
  padding: '$5 6rem $5 $5',

  display: 'flex',
  gap: '6rem',
})

export const HomeContent = styled('main', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  margin: '4.5rem 0 0 21.75rem',

  '.title': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    fontSize: '$xl',
    color: '$gray100',

    marginBottom: '$10',

    '.icon': {
      color: '$green100',
    },
  },
})

export const PageTitle = styled('div', {
  display: 'flex',
  gap: '$3',
  svg: {
    color: '$green100',
  },

  h1: {
    fontSize: '$2xl',
    lineHeight: 1.4,
  },
})

export const Timeline = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  fontSize: '$sm',
  lineHeight: 1.6,

  marginTop: '$10',

  '> .cards': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const PopularBooks = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '5.875rem',

  '> .top': {},
})

export const TopSubtitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: {
    fontSize: '$sm',
  },

  button: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    padding: '$2',
    fontSize: '$sm',
    color: '$purple100',

    fontWeight: 700,
    lineHeight: 1.6,

    borderRadius: 4,

    cursor: 'pointer',

    '&:hover': {
      background: 'rgba(131, 129, 217, 0.06)',
      transition: 'background .3s',
    },
  },
})

export const CardsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
