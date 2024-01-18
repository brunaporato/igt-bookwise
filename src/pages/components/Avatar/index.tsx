import { AvatarContainer } from './styles'

interface AvatarProps {
  avatar: string
  isCard?: boolean
}

export function Avatar({ avatar, isCard }: AvatarProps) {
  return (
    <AvatarContainer
      src={avatar}
      alt=""
      width={isCard ? 40 : 32}
      height={isCard ? 40 : 32}
    />
  )
}
