import { styled } from '@/styles/stitches.config'

export const ExploreContainer = styled('div', {
  padding: '$5 6rem $5 $5',
})

export const ExploreContent = styled('div', {
  margin: '4.5rem 0 0 21.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  '.top': {
    display: 'flex',
    justifyContent: 'space-between',

    div: {
      width: 433,
    },
  },

  '.tags': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
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

export const ExploreBooksGrid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '$5',
})
