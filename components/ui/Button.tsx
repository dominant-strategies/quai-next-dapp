import NextLink from 'next/link';
import { Button as ChakraButton, forwardRef, Link, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';

export interface CustomButtonProps extends HTMLChakraProps<'button'>, ThemingProps {
  href?: string;
  newTab?: boolean;
}

// style definition for custom button component
const Button = forwardRef<CustomButtonProps, 'button'>((props, ref) => {
  const { children, href, newTab, disabled, ...rest } = props;
  // allow button to bundle a next/link if href is passed
  if (href && !disabled) {
    return (
      <Link as={NextLink} href={href} isExternal={newTab} ref={ref}>
        <ChakraButton {...rest}>{children}</ChakraButton>
      </Link>
    );
  }
  // otherwise, just render a button
  return (
    <ChakraButton ref={ref} isDisabled={disabled} {...rest}>
      {children}
    </ChakraButton>
  );
});

export default Button;
