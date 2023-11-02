export const theme = {
  colors: {
    primary: '#000000',
    darkText: '#333333',
    secondary: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
    col_1: '1',
    col_2: '2',
    col_3: '3',
    col_4: '4',
    col_5: '5',
  },
} as const;
