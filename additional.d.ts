import { AbstractProvider, Eip1193Provider } from 'quais';

declare global {
  // ---- global ---- //
  interface Window {
    pelagus?: Eip1193Provider & AbstractProvider;
  }

  // ---- data ---- //
  type TokenReturn = {
    token: Token;
    token_id: string | null;
    token_instance: string | null;
    value: string;
  };

  type Token = {
    address: string;
    circulating_market_cap: string | null;
    decimals: string | null;
    exchange_rate: string | null;
    holders: string | null;
    icon_url: string | null;
    name: string | undefined;
    symbol: string | null;
    total_supply: string | null;
    type: 'ERC-20' | 'ERC-721';
    volume_24h: string | null;
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
    ERC20: TokenReturn[];
    ERC721: TokenReturn[];
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
