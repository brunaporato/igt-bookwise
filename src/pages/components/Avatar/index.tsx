import { AvatarContainer } from './styles'

interface AvatarProps {
  avatar: string | null | undefined
  variant?: 'card' | 'profile'
  onClick?: () => void
}

export function Avatar({ avatar, variant, onClick }: AvatarProps) {
  return (
    <AvatarContainer
      onClick={onClick}
      src={
        avatar ??
        'https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'
      }
      alt=""
      width={32}
      height={32}
      variant={variant}
    />
  )
}
