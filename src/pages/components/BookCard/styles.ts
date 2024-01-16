import { styled } from '@/styles/stitches.config'

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '$6',
  padding: '$5 $6',
  maxWidth: '37.5rem',

  background: '$gray600',
  borderRadius: '$md',

  boxShadow: '0 0 0 2px transparent',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: '0 0 0 2px $colors$gray500',
    transition: 'all .3s',
  },
})

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> .description': {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: 1.6,
  },
})

export const TopSection = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> span': {
    fontSize: '$sm',
    color: '$gray300',
  },

  '> .rating': {
    color: '$purple100',

    display: 'flex',
    gap: '$1',
  },
})

export const TitleAuthor = styled('section', {
  marginTop: '$3',

  '> h1': {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: 1.4,
  },

  '> span': {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: 1.6,
  },
})
