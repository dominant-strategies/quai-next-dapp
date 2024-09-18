import { useEffect, useContext } from 'react';
import { quais } from 'quais';

import { DispatchContext } from '@/store';
import { dispatchAccount, rpcConfig } from '@/lib/utils';

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

    if (window.pelagus) {
      const web3provider = new quais.BrowserProvider(window.pelagus);
      getAccounts(web3provider);
      window.pelagus.on('accountsChanged', (accounts: Array<string>) => {
        dispatchAccount(accounts, dispatch);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetAccounts;
