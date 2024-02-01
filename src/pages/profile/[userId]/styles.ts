import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  padding: '$5 6rem $5 $5',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
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

export const ProfilePageContent = styled('section', {
  margin: '4.5rem 0 0 21.75rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  '.post': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    alignSelf: 'stretch',

    span: {
      color: '$gray300',
      fontSize: '$sm',
    },
  },
})

export const ProfileBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 500,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,

  borderLeft: '1px solid $gray700',
  marginTop: '8.7rem',

  '.decoration': {
    content: '',
    width: '2rem',
    height: '0.25rem',

    borderRadius: '$full',

    background: '$gradient-horizontal',
  },
})

export const ProfileInfos = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  alignItems: 'center',
  paddingBottom: '$2',
  justifyContent: 'center',
  alignSelf: 'stretch',

  h2: {
    fontSize: '$xl',
    textAlign: 'center',
    lineHeight: 1.4,
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: 1.6,
    textAlign: 'center',
  },
})

export const ProfileData = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  padding: '$5 3.5rem',
  gap: '$10',
})

export const ProfileDataItem = styled('div', {
  display: 'flex',
  gap: '$5',
  alignSelf: 'stretch',

  svg: {
    color: '$green100',
  },

  p: {
    fontWeight: 700,
    color: '$gray200',
    lineHeight: 1.4,
  },

  span: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: 1.6,
  },
})

export const ReturnPage = styled('button', {
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$2 $4',

  fontWeight: '$bold',
  lineHeight: 1.6,
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '1rem',

  background: 'none',
  border: 'none',
  borderRadius: '$sm',

  cursor: 'pointer',

  '&:hover': {
    background: '$gray700',
  },
})
