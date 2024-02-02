import { Text, Flex } from '@chakra-ui/react';

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Flex w="100%">
      <Text variant="h2">{title}</Text>
    </Flex>
  );
};

export default PageHeader;
