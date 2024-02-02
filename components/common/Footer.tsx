import { Flex, HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui';

const FooterContent = [
  {
    title: 'Documentation',
    link: 'https://qu.ai/docs/',
  },
  {
    title: 'Github',
    link: 'https://github.com/dominant-strategies',
  },
  {
    title: 'Quai Network',
    link: 'https://qu.ai',
  },
];

const Footer = () => {
  return (
    <Flex
      w="100%"
      p="15px"
      maxW="100%"
      position="fixed"
      left="0"
      bottom="0"
      maxH="60px"
      background="rgba(13,13,13,1)"
      justifyContent="center"
      borderTop="1px solid gray"
    >
      <HStack spacing="10px">
        {FooterContent.map((item, key) => (
          <Button key={key} variant="phantom" size="sm" href={item.link} newTab={true}>
            {item.title}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
};

export default Footer;
