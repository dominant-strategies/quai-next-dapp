import { defineStyleConfig, defineStyle } from '@chakra-ui/styled-system';

const primaryVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.800`,
    color: 'white',
    border: '1px solid',
    borderColor: `${c}.700`,
  };
});

const secondaryVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.200`,
    border: '1px solid',
    borderColor: `${c}.700`,
  };
});

const phantomVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.200`,
    border: '1px solid',
    borderColor: 'transparent',
  };
});

const Badge = defineStyleConfig({
  baseStyle: {
    borderRadius: '5px',
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  sizes: {
    sm: {
      px: '12px',
      h: '24px',
      fontSize: 'sm',
    },
    md: {
      px: '12px',
      h: '32px',
      fontSize: 'md',
    },
    lg: {
      px: '12px',
      h: '40px',
      fontSize: 'lg',
    },
    xl: {
      px: '16px',
      h: '48px',
      fontSize: 'xl',
    },
  },
  variants: {
    primary: primaryVariant,
    secondary: secondaryVariant,
    phantom: phantomVariant,
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary',
    colorScheme: 'brand',
  },
});

export default Badge;
