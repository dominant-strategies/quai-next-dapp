import { defineStyleConfig, defineStyle } from '@chakra-ui/styled-system';

const primaryVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.800`,
    color: 'white',
    border: '1px solid',
    borderColor: `${c}.700`,
    _hover: {
      bg: `${c}.600`,
      borderColor: `${c}.600`,
    },
  };
});

const secondaryVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.200`,
    border: '1px solid',
    borderColor: `${c}.700`,
    _hover: {
      bg: `${c}.800`,
      color: `${c}.100`,
      borderColor: `${c}.800`,
    },
  };
});

const phantomVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.200`,
    border: '1px solid',
    borderColor: 'transparent',
    _hover: {
      bg: `${c}.800`,
      color: `${c}.100`,
      borderColor: `${c}.800`,
    },
    _active: {
      bg: `${c}.800`,
      color: `${c}.100`,
      borderColor: `${c}.800`,
    },
  };
});

const linkVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.200`,
    _hover: {
      color: `${c}.400`,
      textDecoration: 'underline',
    },
  };
});

const flatVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.800`,
    color: `${c}.200`,
    _hover: {
      color: `${c}.400`,
    },
  };
});

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: '0',
    fontWeight: '400',
    _disabled: {
      opacity: '0.9',
      cursor: 'not-allowed',
      bg: 'inherit',
    },
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
    link: linkVariant,
    flat: flatVariant,
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary',
    colorScheme: 'brand',
  },
});

export default Button;
