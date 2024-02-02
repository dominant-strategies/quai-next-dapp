import { useState, useEffect, useContext } from 'react';
import { Text } from '@chakra-ui/react';

import TransactionTable from '@/components/pages/transactions/TransactionTable';
import BaseLayout from '@/components/layouts/BaseLayout';
import { PageHeader } from '@/components/common';

import { buildExplorerUrl, filterTransactionResponse } from '@/lib/utils';
import { fetchTransactions } from '@/lib/api/requests';
import { StateContext } from '@/store';

const Transactions = ({ transactionData, setTransactionData }: TransactionPageProps) => {
  const { account } = useContext(StateContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!account) return;
    if (account.addr === transactionData?.address) return;
    setLoading(true);
    const getTransactions = async () => {
      const response = await fetchTransactions(account.addr, buildExplorerUrl(account.shard.rpcName));
      if (response !== null) {
        const txData = filterTransactionResponse(response.result, account.addr);
        setTransactionData(txData);
      }
      setLoading(false);
    };
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <BaseLayout>
      <PageHeader title="Transactions" />
      {account ? (
        <TransactionTable transactionData={transactionData} loading={loading} />
      ) : (
        <Text py="20px">Connect a wallet to view your recent transactions.</Text>
      )}
    </BaseLayout>
  );
};

export default Transactions;
