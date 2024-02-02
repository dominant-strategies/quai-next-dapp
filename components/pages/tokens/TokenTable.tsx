import { useContext } from 'react';
import { quais } from 'quais';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  Box,
  TableCaption,
  Avatar,
  HStack,
  Text,
  Spinner,
} from '@chakra-ui/react';

import { shortenAddress, buildAddressUrl } from '@/lib/utils';
import { Button } from '@/components/ui';
import { StateContext } from '@/store';

const TokenTable = ({ tokenData, loading }: TokenTableProps) => {
  const { account } = useContext(StateContext);
  const ERC20Tokens: Token[] = tokenData?.ERC20;

  return (
    <Box w="100%" py="20px">
      {ERC20Tokens && !loading ? (
        <Box border="2px" borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <TableCaption>Unique Tokens: {ERC20Tokens ? ERC20Tokens.length : '0'}</TableCaption>
              <Thead>
                <Tr>
                  <Th>Token</Th>
                  <Th>Balance</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                {ERC20Tokens.map((token, key) => (
                  <Tr key={key} cursor="pointer">
                    <Td>
                      <HStack spacing="10px">
                        <Avatar name={token.name} src={''} size="sm" />
                        <Text>{token.name}</Text>
                      </HStack>
                    </Td>
                    <Td>{quais.utils.formatUnits(token.balance.toString(), 'ether')}</Td>
                    <Td>
                      <Button
                        href={buildAddressUrl(account!.shard.rpcName, token.contractAddress)}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {shortenAddress(token.contractAddress)}
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Center w="100%" py="20px">
          {loading ? (
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="#e22901" size="xl" />
          ) : (
            <Text>There was an error fetching your tokens. Please try again.</Text>
          )}
        </Center>
      )}
    </Box>
  );
};

export default TokenTable;
