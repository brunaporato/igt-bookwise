import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchContainer } from './styles'
import { InputHTMLAttributes } from 'react'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...props }: SearchInputProps) {
  return (
    <SearchContainer>
      <input type="text" {...props} />
      <MagnifyingGlass size={20} />
    </SearchContainer>
  )
}
