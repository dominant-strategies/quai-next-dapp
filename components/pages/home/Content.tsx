import { Flex, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaWallet, FaCoins, FaCubes, FaExchangeAlt, FaHammer } from 'react-icons/fa';

const listItems = [
  {
    icon: FaWallet,
    text: 'Connect with Pelagus',
  },
  {
    icon: FaHammer,
    text: 'Build with the Quais SDK',
  },
  {
    icon: FaExchangeAlt,
    text: 'Display transactions',
  },
  {
    icon: FaCoins,
    text: 'Display tokens',
  },
  {
    icon: FaCubes,
    text: 'Get Current Chain Data',
  },
  {
    text: 'And more...',
  },
];

const Content = () => {
  return (
    <Flex as="main" w="full" flexDir="column" py="2" gap="10">
      <Text variant="p1">Learn the basics of building on Quai Network:</Text>
      <List spacing={6}>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            {item.icon && <ListIcon as={item.icon} color="primary.500" />}
            <Text variant="p2-bold" as="span" ml={item.icon && 2}>
              {item.text}
            </Text>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default Content;
