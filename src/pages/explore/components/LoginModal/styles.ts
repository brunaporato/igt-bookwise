import { styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.60)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 2,
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray700',
  borderRadius: 12,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: '3.5rem 4.5rem',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 3,

  '.buttons': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    marginTop: '$10',
  },
})

export const DialogTitle = styled(Dialog.Title, {
  fontWeight: 700,
  color: '$gray200',
  fontSize: '1rem',
  textAlign: 'center',
})

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '$2',
  lineHeight: 1.6,
  fontWeight: 700,

  fontFamily: '$default',
  color: '$purple100',

  cursor: 'pointer',

  '&:hover': {
    background: '$gray700',
  },
})

export const IconButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray400',
  position: 'absolute',
  top: 24,
  right: 24,

  cursor: 'pointer',

  '&:hover': {
    color: '$purple100',
    transition: 'all .3s',
  },

  '&:focus': {
    boxShadow: `0 0 0 2px $purple100`,
  },
})

export const LoginButton = styled('button', {
  display: 'flex',
  gap: '$5',
  alignItems: 'center',
  padding: '$5 $6',
  width: '100%',

  borderRadius: 8,
  background: '$gray600',
  border: 0,

  fontSize: '$md',
  fontWeight: 700,
  color: '$gray200',
  fontFamily: '$default',

  cursor: 'pointer',

  '&:hover': {
    background: '$gray500',
    transition: 'background .3s ease-in',
  },
})
