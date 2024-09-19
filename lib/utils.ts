import { quais } from 'quais';

// ---- formatting ---- //
export const shortenAddress = (address: string) => {
  if (address === '') return '';
  return address.slice(0, 5) + '...' + address.slice(-4);
};

export const unixToDate = (unix: number | string) => {
  if (typeof unix === 'string') unix = parseInt(unix);
  const date = new Date(unix * 1000);
  return date.toLocaleString();
};

export const sortedQuaiShardNames: ShardNames = {
  '0x00': { name: 'Cyprus-1', rpcName: 'cyprus1' },
  '0x01': { name: 'Cyprus-2', rpcName: 'cyprus2' },
  '0x02': { name: 'Cyprus-3', rpcName: 'cyprus3' },
  '0x10': { name: 'Paxos-1', rpcName: 'paxos1' },
  '0x11': { name: 'Paxos-2', rpcName: 'paxos2' },
  '0x12': { name: 'Paxos-3', rpcName: 'paxos3' },
  '0x20': { name: 'Hydra-1', rpcName: 'hydra1' },
  '0x21': { name: 'Hydra-2', rpcName: 'hydra2' },
  '0x22': { name: 'Hydra-3', rpcName: 'hydra3' },
};

// ---- explorer url builders ---- //
export const rpcConfig: [string, undefined, { usePathing: boolean }] = [
  'https://rpc.dev.quai.network',
  undefined,
  { usePathing: true },
];

export const buildExplorerUrl = () => {
  return `https://quaiscan.io`;
};

export const buildAddressUrl = (address: string) => {
  return `https://quaiscan.io/address/${address}`;
};

export const buildTransactionUrl = (txHash: string) => {
  return `https://quaiscan.io/tx/${txHash}`;
};

// ---- dispatchers ---- //
export const dispatchAccount = (accounts: Array<string>, dispatch: any) => {
  let account;
  if (accounts.length !== 0) {
    const shard = quais.getZoneForAddress(accounts[0]);
    account = {
      addr: accounts[0],
      shard: shard,
    };
    dispatch({ type: 'SET_ACCOUNT', payload: account });
  } else {
    account = undefined;
    dispatch({ type: 'SET_ACCOUNT', payload: account });
  }
  return account;
};

// ---- response filters ---- //
export const filterTokenResponse = (tokenData: any, address: string) => {
  const ERC20 = tokenData.filter((token: TokenReturn) => token.token.type === 'ERC-20');
  const ERC721 = tokenData.filter((token: TokenReturn) => token.token.type === 'ERC-721');
  return { ERC20, ERC721, address };
};

export const txType = (tx: Transaction) => {
  if (!tx.to?.hash) return 'Create';
  if (tx.raw_input === '0x') return 'Transfer';
  return 'Call';
};
