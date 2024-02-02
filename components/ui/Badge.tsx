import { Flex as ChakraFlex, useStyleConfig } from '@chakra-ui/react';

// style definition for custom badge component
const Badge = (props: any) => {
  const { children, variant, size, colorScheme, ...rest } = props;
  const styles = useStyleConfig('Badge', { size, variant, colorScheme });
  return (
    <ChakraFlex __css={styles} {...rest}>
      {children}
    </ChakraFlex>
  );
};

export default Badge;
