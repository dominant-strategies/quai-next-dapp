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
  'zone-0-0': { name: 'Cyprus-1', rpcName: 'cyprus1' },
  'zone-0-1': { name: 'Cyprus-2', rpcName: 'cyprus2' },
  'zone-0-2': { name: 'Cyprus-3', rpcName: 'cyprus3' },
  'zone-1-0': { name: 'Paxos-1', rpcName: 'paxos1' },
  'zone-1-1': { name: 'Paxos-2', rpcName: 'paxos2' },
  'zone-1-2': { name: 'Paxos-3', rpcName: 'paxos3' },
  'zone-2-0': { name: 'Hydra-1', rpcName: 'hydra1' },
  'zone-2-1': { name: 'Hydra-2', rpcName: 'hydra2' },
  'zone-2-2': { name: 'Hydra-3', rpcName: 'hydra3' },
};

// ---- explorer url builders ---- //
export const buildRpcUrl = (shardName: string) => {
  return `https://rpc.${shardName}.colosseum.quaiscan.io/`;
};

export const buildExplorerUrl = (shardName: string) => {
  return `https://${shardName}.colosseum.quaiscan.io`;
};

export const buildAddressUrl = (shardName: string, address: string) => {
  return `https://${shardName}.colosseum.quaiscan.io/address/${address}`;
};

export const buildTransactionUrl = (shardName: string, txHash: string) => {
  return `https://${shardName}.colosseum.quaiscan.io/tx/${txHash}`;
};

// ---- dispatchers ---- //
export const dispatchAccount = (accounts: Array<string>, dispatch: any) => {
  console.log('Dispatching account:', accounts)
  let account;
  if (accounts.length !== 0) {
    const shard = quais.utils.getShardFromAddress(accounts[0]);
    account = {
      addr: accounts[0],
      shard: sortedQuaiShardNames[shard],
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
  const ERC20 = tokenData.filter((token: Token) => token.type === 'ERC-20');
  const ERC721 = tokenData.filter((token: Token) => token.type === 'ERC-721');
  return { ERC20, ERC721, address };
};

export const txType = (tx: Transaction) => {
  if (tx.to === '') return 'Create';
  if (tx.input === '0x') return 'Transfer';
  return 'Call';
};

export const filterTransactionResponse = (transactions: any, address: string) => {
  return { transactions, address };
};
