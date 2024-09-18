import { AbstractProvider, Eip1193Provider } from 'quais';

declare global {
  // ---- global ---- //
  interface Window {
    pelagus?: Eip1193Provider & AbstractProvider;
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
    hash: string;
    type: string;
    from: { hash: string };
    to: { hash: string };
    gas_used: string;
    status: string;
    raw_input: string;
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
    transactionData: Transaction[];
    loading: boolean;
  }
}
