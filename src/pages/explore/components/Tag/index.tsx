import { TagContainer } from './styles'

interface TagProps {
  children: string
  isSelected?: boolean
  onClick?: () => void
}

export function Tag({ children, isSelected, onClick, ...props }: TagProps) {
  return (
    <TagContainer selected={isSelected} onClick={onClick} {...props}>
      {children}
    </TagContainer>
  )
}
