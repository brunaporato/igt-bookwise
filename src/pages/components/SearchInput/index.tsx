import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchContainer } from './styles'

interface SearchInputProps {
  placeholder: string
}

export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <SearchContainer>
      <input type="text" placeholder={placeholder} />
      <MagnifyingGlass size={20} />
    </SearchContainer>
  )
}
