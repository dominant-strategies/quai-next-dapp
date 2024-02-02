import { useEffect, useState, useContext } from 'react';
import { Flex, Select, Text } from '@chakra-ui/react';

import { TokenTable, NftTable } from '@/components/pages/tokens';
import BaseLayout from '@/components/layouts/BaseLayout';
import { PageHeader } from '@/components/common';

import { buildExplorerUrl, filterTokenResponse } from '@/lib/utils';
import { fetchTokens } from '@/lib/api/requests';
import { StateContext } from '@/store';

const Tokens = ({ tokenData, setTokenData }: TokenPageProps) => {
  const { account } = useContext(StateContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenType, setTokenType] = useState<string>('ERC20');

  useEffect(() => {
    if (!account) return; // if account is undefined, don't attempt to load transactions
    if (account.addr === tokenData?.address) return; // if account is the same as the previous account, don't attempt to load tokens
    setLoading(true);
    const getTokens = async () => {
      const response = await fetchTokens(account.addr, buildExplorerUrl(account.shard.rpcName));
      if (response !== null) {
        const tokenData = filterTokenResponse(response.result, account.addr);
        setTokenData(tokenData);
      }
      setLoading(false);
    };
    getTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenType(e.target.value);
  };

  return (
    <BaseLayout>
      <Flex minW="400px" flexDirection="row">
        <PageHeader title="Token Balances" />
        <Select size="md" w="50%" mb="20px" value={tokenType} onChange={handleChange}>
          <option value="ERC20">ERC20</option>
          <option value="ERC721">ERC721</option>
        </Select>
      </Flex>
      {account ? (
        <>
          {tokenType === 'ERC20' ? (
            <TokenTable tokenData={tokenData} loading={loading} />
          ) : (
            <NftTable tokenData={tokenData} loading={loading} />
          )}
        </>
      ) : (
        <Text pt="20px">Connect a wallet to view your token balances.</Text>
      )}
    </BaseLayout>
  );
};

export default Tokens;
