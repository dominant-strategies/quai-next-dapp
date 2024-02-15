import { quais } from 'quais';
import { buildRpcUrl, dispatchAccount } from './utils';

// ---- request accounts ---- //
// only called on user action, prompts user to connect their wallet
// gets user accounts and provider if user connects their wallet

const requestAccounts = (dispatch: any) => {
  const requestAccount = async (provider: any) => {
    let account;
    await provider
      .send('quai_requestAccounts')
      .then((accounts: Array<string>) => {
        account = dispatchAccount(accounts, dispatch);
      })
      .catch((err: Error) => {
        console.log('Error getting accounts.', err);
      });
    return account;
  };

  // This ensures we choose the pelagus provider when users have multiple providers available
  const provider = window.ethereum.providers?.find((provider: any) => provider.isPelagus ) || window.ethereum
  if (provider?.isPelagus) {
    const web3provider = new quais.providers.Web3Provider(provider);
    requestAccount(web3provider).then((account: any) => {
      if (account) {
        const rpcProvider = new quais.providers.JsonRpcProvider(buildRpcUrl(account.shard.rpcName));
        dispatch({ type: 'SET_PROVIDER', payload: { web3: web3provider, rpc: rpcProvider } });
      } else {
        dispatch({ type: 'SET_PROVIDER', payload: { web3: web3provider, rpc: undefined } });
      }
    });
  } else {
    dispatch({ type: 'SET_PROVIDER', payload: { web3: undefined, rpc: undefined } });
  }
};

export default requestAccounts;
