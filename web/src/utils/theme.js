// import media from './media';

export default {
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      default: '#8d2722',
      800: '#a3524e',
      600: '#ba7d7a',
      400: '#d1a8a6',
      200: '#e8d3d2',
    },
    secondary: {
      default: '#355069',
      800: '#5d7387',
      600: '#8596a5',
      400: '#aeb9c3',
      200: '#d6dce1',
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
