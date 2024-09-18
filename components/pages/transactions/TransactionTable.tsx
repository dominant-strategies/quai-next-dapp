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
  Text,
  Spinner,
} from '@chakra-ui/react';

import { shortenAddress, buildTransactionUrl, buildAddressUrl, txType } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';

const TransactionTable = ({ transactionData, loading }: TransactionTableProps) => {
  return (
    <Box w="100%" py="20px">
      {transactionData !== undefined && !loading ? (
        <Box border="2px" borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <TableCaption>Transactions Shown: {transactionData.length}</TableCaption>
              <Thead>
                <Tr>
                  <Th>Hash</Th>
                  <Th>Type</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Gas used</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactionData.map((tx: any, key: number) => (
                  <Tr key={key} cursor="pointer">
                    <Td>
                      <Button href={buildTransactionUrl(tx.hash)} variant="link" newTab={true} size="md">
                        {shortenAddress(tx.hash)}
                      </Button>
                    </Td>
                    <Td>
                      <Badge variant="primary">{txType(tx)}</Badge>
                    </Td>
                    <Td>
                      <Button
                        href={buildAddressUrl(tx.from ? tx.from.hash : '')}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {tx.from ? shortenAddress(tx.from.hash) : 'N/A'}
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        href={tx.to !== null ? buildAddressUrl(tx.to.hash) : undefined}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {tx.to !== null ? shortenAddress(tx.to.hash) : ''}
                      </Button>
                    </Td>
                    <Td>{tx.gas_used} gwei</Td>
                    <Td>{tx.timestamp}</Td>
                    <Td>
                      <Text color={tx.status == 'ok' ? 'green.400' : 'red.500'}>
                        {tx.status === 'ok' ? 'Success' : 'Failed'}
                      </Text>
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
            <Text>There was an error fetching your transactions. Please try again.</Text>
          )}
        </Center>
      )}
    </Box>
  );
};

export default TransactionTable;
