import { nunito } from '@/pages/_app.page'
import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: nunito.style.fontFamily,
  },

  body: {
    background: '$gray800',
    color: '$gray100',
    height: '100vh',
    width: '100%',
  },
})
