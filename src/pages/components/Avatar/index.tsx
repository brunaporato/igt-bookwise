import { AvatarContainer } from './styles'

interface AvatarProps {
  avatar: string
  variant?: 'card' | 'profile'
}

export function Avatar({ avatar, variant }: AvatarProps) {
  return (
    <AvatarContainer
      src={avatar}
      alt=""
      width={32}
      height={32}
      variant={variant}
    />
  )
}
