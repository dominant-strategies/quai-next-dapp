import { ExternalProvider } from 'quais';

declare global {
  // ---- global ---- //
  interface Window {
    ethereum?: ExternalProvider;
  }

  // ---- data ---- //
  type Token = {
    balance: string;
    contractAddress: string;
    decimals: number;
    name: string;
    symbol: string;
    type: string;
  };
  type Transaction = {
    blockHash: string;
    blockNumber: number;
    confirmations: number;
    contractAddress: string;
    cumulativeGasUsed: number;
    from: string;
    gasPrice: string | number;
    gasUsed: string | number;
    hash: string;
    input: string;
    isError: number;
    nonce: number;
    timeStamp: string;
    to: string;
    transactionIndex: number | string;
    txreceipt_status: number | string;
    value: string | number;
  };
  type TokenData = {
    ERC20: Token[];
    ERC721: Token[];
    address: string | null;
  };
  type TransactionData = {
    transactions: Transaction[];
    address: string | null;
  };
  type ShardNames = {
    [key: string]: { name: string; rpcName: string };
  };

  // ---- page + component props ---- //
  interface BaseLayoutProps {
    children?: ReactNode;
  }
  interface PageHeaderProps {
    title: string;
    subtitle?: string;
  }
  interface TokenPageProps {
    tokenData: TokenData;
    setTokenData: React.Dispatch<React.SetStateAction<TokenData>>;
  }
  interface TransactionPageProps {
    transactionData: TransactionData;
    setTransactionData: React.Dispatch<React.SetStateAction<TransactionData>>;
  }
  interface TokenTableProps {
    tokenData: TokenData;
    loading: boolean;
  }
  interface TransactionTableProps {
    transactionData: TransactionData;
    loading: boolean;
  }
}
