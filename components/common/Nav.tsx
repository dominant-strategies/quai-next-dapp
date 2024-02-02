import { useContext } from 'react';
import Image from 'next/image';
import { Flex, HStack, Text } from '@chakra-ui/react';

import { DispatchContext, StateContext } from '@/store';
import requestAccounts from '@/lib/requestAccounts';
import useGetAccounts from '@/lib/useGetAccounts';
import Button from '@/components/ui/Button';
import { shortenAddress } from '@/lib/utils';

const NavButtonContent = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Transactions',
    link: '/transactions',
  },
  {
    name: 'Tokens',
    link: '/tokens',
  },
];

const Nav = () => {
  const { account } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useGetAccounts();

  const connectHandler = () => {
    requestAccounts(dispatch);
  };
  return (
    <Flex
      w="100%"
      p="15px"
      maxW="100%"
      position="fixed"
      maxH="70px"
      backdropFilter="blur(10px)"
      background="rgba(13,13,13,0.8)"
      justifyContent="space-between"
      zIndex={100}
    >
      <HStack spacing="15px">
        <Image src="/quai-logo.png" alt="Quai Network Logo" width={35} height={35} />
        {NavButtonContent.map((item, key) => (
          <Button key={key} variant="phantom" size="md" href={item.link} newTab={false}>
            {item.name}
          </Button>
        ))}
      </HStack>
      <Button variant="primary" size="md" onClick={connectHandler} disabled={!!account}>
        {account ? (
          <Flex gap="10px">
            <Text variant="p2-bold">{account.shard.name}</Text>
            <Text>{shortenAddress(account.addr)}</Text>
          </Flex>
        ) : (
          'Connect'
        )}
      </Button>
    </Flex>
  );
};

export default Nav;
