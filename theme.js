import { book, syntaxHighlighterPrism } from 'mdx-deck/themes'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const theme = syntaxHighlighterPrism({
  ...book,
  font: '"Alegreya", serif',
  monospace: '"Fira Code", monospace',
  googleFont:
    'https://fonts.googleapis.com/css?family=Alegreya:400,400i,700|Alegreya+SC:400',
  colors: {
    ...book.colors,
    text: '#111',
    background: '#fafafa',
    code: '#be9d31',
    link: '#be9d31'
  },
  a: {
    textDecoration: 'none'
  },
  code: {
    fontSize: '20px',
    '@media screen and (min-width:56em)': {
      fontSize: '26px'
    },
    '@media screen and (min-width:64em)': {
      fontSize: '38px'
    },
    '@media print': {
      fontSize: '36px'
    }
  },
  css: {
    ...book.css,
    textAlign: 'left',
    fontSize: '1.5rem',
    table: {
      fontSize: '1.8rem'
    },
    'pre[class^="language-"]': {
      padding: '2rem 0 !important',
      fontSize: '1.4rem !important',
      lineHeight: '1.6 !important',
      code: {
        fontSize: '1.4rem !important'
      }
    },
    '@media screen and (min-width:64em)': {
      fontSize: '3rem'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  },
  prism: {
    style: prism,
    customStyle: {
      backgroundColor: '#fafafa'
    }
  }
})
