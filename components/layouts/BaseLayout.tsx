import type { FC } from 'react';
import { Container } from '@chakra-ui/react';

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Container py="100px" maxW="6xl" minW="400px" minH="500px" centerContent>
      <main>{children}</main>
    </Container>
  );
};

export default BaseLayout;
