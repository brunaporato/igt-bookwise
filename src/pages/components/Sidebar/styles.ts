import { styled } from '@/styles/stitches.config'
import Image from 'next/image'

export const Container = styled('div', {
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
})

export const Menu = styled('nav', {})

export const Profile = styled('div', {})

export const ProfileIcon = styled(Image, {})
