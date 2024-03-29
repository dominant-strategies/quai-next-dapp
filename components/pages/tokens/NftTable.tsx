import { useContext } from 'react';
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

const NftTable = ({ tokenData, loading }: TokenTableProps) => {
  const { account } = useContext(StateContext);
  const nfts: Token[] = tokenData?.ERC721;

  return (
    <Box w="100%" py="20px">
      {nfts && !loading ? (
        <Box border="2px" borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <TableCaption>Total Collections: {nfts ? nfts.length : '0'}</TableCaption>
              <Thead>
                <Tr>
                  <Th>Token</Th>
                  <Th>Balance</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                {nfts.map((collection, key) => (
                  <Tr key={key} cursor="pointer">
                    <Td>
                      <HStack spacing="10px">
                        <Avatar name={collection.name} src={''} size="sm" />
                        <Text>{collection.name}</Text>
                      </HStack>
                    </Td>
                    <Td>{collection.balance.toString()}</Td>
                    <Td>
                      <Button
                        href={buildAddressUrl(account!.shard.rpcName, collection.contractAddress)}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {shortenAddress(collection.contractAddress)}
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
            <Text>There was an error loading your NFTs. Please try again.</Text>
          )}
        </Center>
      )}
    </Box>
  );
};

export default NftTable;
