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
    secondary: {
      default: '#0C6291',
      800: '#3c81a7',
      600: '#6da0bd',
      400: '#9dc0d3',
      200: '#cedfe9',
    },
  },
  spacing: {
    unit: px => `${px * 8}px`,
    mediaQuery: {
      mobile: '(max-width: 873px)',
    },
  },
  border: {
    radius: '10px',
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
