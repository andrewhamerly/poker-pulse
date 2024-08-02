import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const theme = extendTheme({
  colors: {
    brand: {
      onyx: '#353B3B',
      hunterGreen: '#35654D',
      eerieBlack: '#1D2020',
      gunmetal: '#2A3030',
      outerSpace: '#454C4C',
      rojo: '#DA342D',
      vermilllion: '#F45149',
      whiteSmoke: '#F5F5F5',
      white: '#FBFCFF',
    },
  },
  breakpoints
});

export default theme;