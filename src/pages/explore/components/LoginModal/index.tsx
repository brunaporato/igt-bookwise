import * as Dialog from '@radix-ui/react-dialog'
import {
  Button,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  IconButton,
  LoginButton,
} from './styles'
import { X } from '@phosphor-icons/react'
import Google from '../../../../public/icons/google-logo.svg'
import Github from '../../../../public/icons/github-logo.svg'
import Image from 'next/image'

export function LoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Add review</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Login to review this book</DialogTitle>
          <div className="buttons">
            <LoginButton>
              <Image src={Google} alt="" width={32} />
              Login with Google
            </LoginButton>
            <LoginButton>
              <Image src={Github} alt="" width={32} />
              Login with Github
            </LoginButton>
          </div>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <X size={24} />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
