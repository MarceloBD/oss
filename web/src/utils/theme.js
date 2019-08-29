import { createMuiTheme } from '@material-ui/core/styles';

import media from './media';

export default createMuiTheme({
  shadow: {
    inset: 'inset 6px 28px 85px -40px rgba(0,0,0,0.4)',
    box: '0 2px 40px 0 rgba(0, 0, 0, 0.2)',
  },
  palette: {
    background: {
      default: '#171026',
      light: '  #FFFFFF',
      dark: '#1c1c1c',
    },
    common: {
      darkGray: '#262626',
      lightGray: '#4B4B4B',
    },
    action: {
      hover: '#A3C31A',
    },
    primary: {
      light: '#201335',
      main: '#D10163',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#a3c31a',
      contrastText: '#6C2877',
    },

    lessonViewMode: [
      { name: 'light', backgroundColor: '#FFFFFF', titleColor: '#222222', contentColor: '#757575' },
      { name: 'dark', backgroundColor: '#121212', titleColor: '#E3E3E3', contentColor: '#E3E3E3' },
    ],
  },
  spacing: {
    margin: 175,
    width: 1200,
    betweenBox: 16,
    mediaQuery: {
      mobile: '(max-width: 873px)',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Exo, sans-serif',
    fontFamilyBold: 'Exo, sans-serif; font-weight: 700 !important',
    h1: {
      fontFamily: 'Exo, sans-serif',
      fontWeight: 'bold',
      fontSize: '34px',
      color: 'white',
      textTransform: 'normal',
    },
    h2: {
      fontFamily: 'Exo, sans-serif',
      fontSize: '42px',
      fontWeight: '700',
      lineHeight: 'normal',
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '26px',
      fontFamily: 'Exo, sans-serif',
      fontWeight: '800',
      fontColor: '#222222',
    },
    p: {
      fontFamily: 'Exo, sans-serif',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: 'normal',
      color: '#FFFFFF',
    },
  },
  media,
});
