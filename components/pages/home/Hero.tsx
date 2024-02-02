import { Flex, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex py="60px" maxW="100vw" direction="column">
      <Text variant="display" borderBottom="1px solid" borderColor="gray.700">
        Quai Dapp Starter
      </Text>
    </Flex>
  );
};

export default Hero;
