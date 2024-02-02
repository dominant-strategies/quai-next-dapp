import { Center, Text } from '@chakra-ui/react';

import BaseLayout from '@/components/layouts/BaseLayout';
import { Button } from '@/components/ui';

const Home = () => {
  return (
    <BaseLayout>
      <Center flexDirection="column" pt="300px" gap="20px">
        <Text variant="h1">404: Page not found</Text>
        <Button variant="primary" href="/" size="lg" newTab={false}>
          Go back home
        </Button>
      </Center>
    </BaseLayout>
  );
};

export default Home;
