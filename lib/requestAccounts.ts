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

  if (window.ethereum?.isPelagus) {
    const web3provider = new quais.providers.Web3Provider(window.ethereum);
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
