// import media from './media';

export default {
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      default: '#880044',
      800: '#a03369',
      600: '#b8668f',
      400: '#cf99b4',
      200: '#e7ccda',
    },
    secodary: {
      default: 'rgb(12,98,145)', // #0C6291
      800: 'rgb(12,98,145, 0.8)',
      600: 'rgb(12,98,145, 0.6)',
      400: 'rgb(12,98,145, 0.4)',
      200: 'rgb(12,98,145, 0.2)',
    },
  },
  spacing: {
    mediaQuery: {
      mobile: '(max-width: 873px)',
    },
  },
  typography: {
    light: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '400',
    },
    bold: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '700',
    },
    p: {
      fontFamily: 'Exo, sans-serif',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: 'normal',
      color: '#FFFFFF',
    },
  },
};
