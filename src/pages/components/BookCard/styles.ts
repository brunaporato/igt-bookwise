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

  '> img': {
    gridArea: 'cover',
  },

  variants: {
    isSmall: {
      true: {
        background: '$gray700',
        maxWidth: 324,

        '> img': {
          width: 64,
          height: 94,
        },
      },
    },
    isReview: {
      true: {
        background: '$gray700',

        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '108px 1fr',

        gridTemplateAreas: `
          "profileInfo profileInfo profileInfo"
          "cover bookInfo bookInfo"
        `,

        gridColumnGap: '$5',
        gridRowGap: '$8',

        '> .top-review': {
          gridArea: 'profileInfo',

          display: 'flex',
          justifyContent: 'space-between',

          '> .profile-info': {
            display: 'flex',
            gap: '$4',
            alignItems: 'center',

            span: {
              fontSize: '$sm',
              color: '$gray400',
            },
          },
        },
      },
    },
    isOnExplore: {
      true: {
        background: '$gray700',

        '> img': {
          width: 108,
          height: 152,
        },
      },
    },
  },
})

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'bookInfo',

  '> .description': {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: 1.6,
  },

  variants: {
    isSmall: {
      true: {
        '> .top-content': {
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'space-between',
          height: 'stretch',

          '.date': {
            display: 'none',
          },

          section: {
            margin: 0,
          },
        },
      },
    },
    isOnExplore: {
      true: {
        '> .top-content': {
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'space-between',
          height: 'stretch',

          '.date': {
            display: 'none',
          },

          section: {
            margin: 0,
          },
        },
      },
    },
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

  variants: {
    isReview: {
      true: {
        display: 'none',
      },
    },
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
