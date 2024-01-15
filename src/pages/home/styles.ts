import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$5',
})

export const SideImage = styled('div', {
  borderRadius: '$md',
  overflow: 'hidden',
  flexShrink: 0,
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background:
    'linear-gradient(0deg, rgba(42, 40, 121, 0.60) 0%, rgba(42, 40, 121, 0.60) 100%), rgba(0, 0, 0, 0.60)',

  height: 'calc(100vh - 2.5rem)',
  width: '40%',

  '.background-image': {
    objectFit: 'cover',
    width: '100%',
    opacity: 0.15,

    position: 'absolute',
  },
})

export const LoginContainer = styled('section', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '.buttons': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },
})

export const WelcomeText = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$px',

  marginBottom: '$10',
})

export const SocialLogin = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  width: '100%',

  background: '$gray600',
  padding: '$5 $6',

  borderRadius: 8,

  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(1.1)',
    transition: 'filter 0.3s ease',
  },
})
