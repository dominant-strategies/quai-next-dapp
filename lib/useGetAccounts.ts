import { useEffect, useContext } from 'react';
import { quais } from 'quais';

import { DispatchContext } from '@/store';
import { buildRpcUrl, dispatchAccount } from '@/lib/utils';

// ---- get accounts ---- //
// called in background on page load, gets user accounts and provider if pelagus is connected
// sets up accountsChanged listener to handle account changes

const useGetAccounts = () => {
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    const getAccounts = async (provider: any) => {
      let account;
      await provider
        .send('quai_accounts')
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
      getAccounts(web3provider).then((account: any) => {
        if (account) {
          const rpcProvider = new quais.providers.JsonRpcProvider(buildRpcUrl(account.shard.rpcName));
          dispatch({ type: 'SET_PROVIDER', payload: { web3: web3provider, rpc: rpcProvider } });
          window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
            dispatchAccount(accounts, dispatch);
          });
        } else {
          dispatch({ type: 'SET_PROVIDER', payload: { web3: web3provider, rpc: undefined } });
        }
      });
    } else {
      dispatch({ type: 'SET_PROVIDER', payload: { web3: undefined, rpc: undefined } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetAccounts;
