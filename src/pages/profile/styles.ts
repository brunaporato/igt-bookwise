import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  padding: '$5',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
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

export const ProfileInfos = styled('section', {})

export const ProfileData = styled('div', {})
