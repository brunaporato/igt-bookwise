import { AvatarContainer } from './styles'

interface AvatarProps {
  avatar: string
  variant?: 'card' | 'profile'
  onClick?: () => void
}

export function Avatar({ avatar, variant, onClick }: AvatarProps) {
  return (
    <AvatarContainer
      onClick={onClick}
      src={avatar}
      alt=""
      width={32}
      height={32}
      variant={variant}
    />
  )
}
