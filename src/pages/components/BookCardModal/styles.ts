import { styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const BookCardModalContainer = styled('div', {
  width: '100%',

  'button, fieldset, input': {
    all: 'unset',
    width: '100%',
  },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.60)',
  position: 'fixed',
  inset: 0,
})

export const DialogBox = styled(Dialog.Content, {
  background: '$gray800',

  height: '100vh',
  width: '40%',

  padding: '4rem 3rem',

  position: 'fixed',
  zIndex: 2,
  top: 0,
  right: 0,

  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: 6,
    margin: 10,
  },

  '&::-webkit-scrollbar-thumb': {
    flexShrink: 0,
    borderRadius: '$full',
    padding: 8,
    background: '$gray700',
  },
})

export const DialogClose = styled(Dialog.Close, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 4,

  padding: '$1',

  color: '$gray400',

  position: 'absolute',
  top: '$6',
  right: '3rem',

  cursor: 'pointer',

  '&:hover': {
    color: '$purple100',
    transition: 'color .3s',
  },
})

export const DialogBookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$6 $8 $4 $8',
  background: '$gray700',

  borderRadius: '$md',

  '.top': {
    display: 'flex',
    gap: '$8',
    alignSelf: 'stretch',

    '.infos': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    '.title-author': {
      display: 'flex',
      flexDirection: 'column',
      gap: '$2',

      h2: {
        fontSize: '$lg',
        lineHeight: 1.4,
      },

      span: {
        color: '$gray300',
      },
    },

    '.rating': {
      display: 'flex',
      flexDirection: 'column',
      gap: '$1',

      span: {
        fontSize: '$sm',
        lineHeight: 1.6,
        color: '$gray400',
      },
    },
  },

  '.more-info': {
    display: 'flex',
    padding: '$6 0',
    gap: '3.5rem',

    borderTop: '1px solid $gray600',
  },
})

export const MoreInfoItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  padding: '0 $1',

  svg: {
    color: '$green100',
  },

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },

  p: {
    color: '$gray200',
    fontWeight: 700,
  },
})

export const CommentsBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '$10',

  '.title': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    h2: {
      fontSize: '$sm',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '$gray200',
    },

    button: {
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
    },

    '.no-display': {
      display: 'none',
    },
  },
})

export const ReviewInputBox = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  alignSelf: 'stretch',
  gap: '$6',

  borderRadius: 8,
  background: '$gray700',

  '.top': {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-between',

    '.user-info': {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',

      fontWeight: 700,
      lineHeight: 1.4,
    },
  },

  textarea: {
    padding: '$3 $5',
    borderRadius: '$sm',
    border: '1px solid $gray500',
    background: '$gray800',
    height: 164,
    color: '$gray400',
    fontSize: '$sm',
    resize: 'vertical',
  },

  '.buttons': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    flexDirection: 'row-reverse',

    marginTop: '-12px',
  },
})

export const ReviewButton = styled('button', {
  all: 'unset',
  padding: '$2',
  display: 'flex',
  alignItems: 'center',

  borderRadius: 4,
  background: '$gray600',

  cursor: 'pointer',

  '&:hover': {
    background: '$gray500',
    transition: 'all .3s',
  },

  variants: {
    variant: {
      purple: { color: '$purple100' },
      green: { color: '$green100' },
    },
  },
})
