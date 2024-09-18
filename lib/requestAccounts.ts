import { quais } from 'quais';
import { dispatchAccount } from './utils';

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

  if (window.pelagus) {
    const web3provider = new quais.BrowserProvider(window.pelagus);
    requestAccount(web3provider);
  }
};

export default requestAccounts;
