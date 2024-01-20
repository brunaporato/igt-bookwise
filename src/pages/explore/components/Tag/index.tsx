import { TagContainer } from './styles'

interface TagProps {
  children: string
  isSelected?: boolean
}

export function Tag({ children, isSelected, ...props }: TagProps) {
  return (
    <TagContainer selected={isSelected} {...props}>
      {children}
    </TagContainer>
  )
}
