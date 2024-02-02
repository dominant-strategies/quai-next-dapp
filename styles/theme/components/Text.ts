import { defineStyleConfig } from '@chakra-ui/styled-system';

const Text = defineStyleConfig({
  baseStyle: {
    color: 'brand.100',
    fontSize: 'sm',
    fontWeight: 'light',
  },
  variants: {
    display: {
      fontSize: '6xl',
      letterSpacing: 'widest',
      fontWeight: 'semibold',
    },
    h1: {
      fontSize: '4xl',
      letterSpacing: 'wide',
      fontWeight: 'semibold',
    },
    h2: {
      fontSize: '2xl',
      letterSpacing: 'wide',
      fontWeight: 'semibold',
    },
    h3: {
      fontSize: 'xl',
      letterSpacing: 'wide',
      fontWeight: 'semibold',
    },
    p1: {
      fontSize: 'lg',
      letterSpacing: 'tight',
      fontWeight: 'light',
    },
    p2: {
      fontSize: 'md',
      letterSpacing: 'tight',
      fontWeight: 'light',
    },
    'p2-bold': {
      fontSize: 'md',
      letterSpacing: 'tight',
      fontWeight: 'semibold',
    },
    p3: {
      fontSize: 'xs',
      letterSpacing: 'tight',
      fontWeight: 'light',
    },
  },
  defaultProps: {
    variant: 'p2',
    colorScheme: 'brand',
  },
});

export default Text;
