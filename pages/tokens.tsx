import { useEffect, useState, useContext } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TokenTable, NftTable } from '@/components/pages/tokens';
import BaseLayout from '@/components/layouts/BaseLayout';
import { PageHeader } from '@/components/common';
import { filterTokenResponse } from '@/lib/utils';
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
      const response = await fetchTokens(account.addr, 'https://quaiscan.io');
      if (response !== null && Array.isArray(response) && response.length > 0) {
        const tokenData = filterTokenResponse(response, account.addr);
        setTokenData(tokenData);
      } else {
        setTokenData({ ERC20: [], ERC721: [], address: account.addr });
      }
      setLoading(false);
    };
    getTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const handleChange = (value: string) => {
    setTokenType(value);
  };

  return (
    <BaseLayout>
      <div className="flex min-w-[500px]">
        <PageHeader title="Token Balances" />
        <Select onValueChange={handleChange} defaultValue={tokenType}>
          <SelectTrigger className="w-[150px]">
            <SelectValue>{tokenType}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ERC20">ERC20</SelectItem>
            <SelectItem value="ERC721">ERC721</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {account ? (
        <>
          {tokenType === 'ERC20' ? (
            <TokenTable tokenData={tokenData} loading={loading} />
          ) : (
            <NftTable tokenData={tokenData} loading={loading} />
          )}
        </>
      ) : (
        <div className="pt-[20px]">Connect a wallet to view your token balances.</div>
      )}
    </BaseLayout>
  );
};

export default Tokens;
