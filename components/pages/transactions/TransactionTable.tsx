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
  Text,
  Spinner,
} from '@chakra-ui/react';

import { shortenAddress, unixToDate, buildTransactionUrl, buildAddressUrl, txType } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';
import { StateContext } from '@/store';

const TransactionTable = ({ transactionData, loading }: TransactionTableProps) => {
  const { account } = useContext(StateContext);
  const transactions: Transaction[] = transactionData?.transactions;
  return (
    <Box w="100%" py="20px">
      {transactions && !loading ? (
        <Box border="2px" borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <TableCaption>Transactions Shown: {transactions.length}</TableCaption>
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
                {transactions.map((tx, key) => (
                  <Tr key={key} cursor="pointer">
                    <Td>
                      <Button
                        href={buildTransactionUrl(account!.shard.rpcName, tx.hash)}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {shortenAddress(tx.hash)}
                      </Button>
                    </Td>
                    <Td>
                      <Badge variant="primary">{txType(tx)}</Badge>
                    </Td>
                    <Td>
                      <Button
                        href={buildAddressUrl(account!.shard.rpcName, tx.from)}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {shortenAddress(tx.from)}
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        href={buildAddressUrl(account!.shard.rpcName, tx.to)}
                        variant="link"
                        newTab={true}
                        size="md"
                      >
                        {shortenAddress(tx.to)}
                      </Button>
                    </Td>
                    <Td>{quais.utils.formatUnits(tx.gasUsed.toString(), 'gwei')} gwei</Td>
                    <Td>{unixToDate(tx.timeStamp)}</Td>
                    <Td>
                      <Text color={tx.txreceipt_status == '1' ? 'green.400' : 'red.500'}>
                        {tx.txreceipt_status === '1' ? 'Success' : 'Failed'}
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
