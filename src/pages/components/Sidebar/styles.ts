import { styled } from '@/styles/stitches.config'

export const Container = styled('nav', {
  background: '$gray700',
  padding: '$10 $10 $6',
  borderRadius: 12,
  width: 'fit-content',
  height: 'calc(100vh - 40px)',

  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',

  '.logo': {
    opacity: 0.9,
    marginBottom: '4rem',
  },

  '.top': {
    alignSelf: 'center',
  },

  position: 'fixed',
})

export const Menu = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  listStyle: 'none',
})

export const MenuButton = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  padding: '$2 0',
  gap: '$3',

  lineHeight: 1.6,
  color: '$gray400',

  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    selected: {
      true: {
        color: '$gray100',

        '&:before': {
          content: '',
          width: 4,
          height: 24,

          background: '$gradient-vertical',
          borderRadius: '$full',

          position: 'absolute',
          marginLeft: '-1rem',
        },
      },
    },
  },
})

export const Profile = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',

  '> p': {
    fontSize: '$sm',
  },
})

export const LogoutButton = styled('button', {
  all: 'unset',
  padding: '$1',
  color: '#F75A68',

  borderRadius: '$sm',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(230, 232, 242, 0.04)',
    transition: 'all .3s',
  },
})
