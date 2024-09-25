import { useContext } from 'react';
import Image from 'next/image';

import { shortenAddress, sortedQuaiShardNames } from '@/lib/utils';
import { DispatchContext, StateContext } from '@/store';
import requestAccounts from '@/lib/requestAccounts';
import useGetAccounts from '@/lib/useGetAccounts';
import { Button } from '@/components/ui/button';

const NavButtonContent = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Transactions',
    link: '/transactions',
  },
  {
    name: 'Tokens',
    link: '/tokens',
  },
];

const Nav = () => {
  const { account } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useGetAccounts();

  const connectHandler = () => {
    requestAccounts(dispatch);
  };
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full p-[15px] max-h-[70px] bg-rgba(13,13,13,0.8) backdrop-blur-[10px] z-[100]">
      <div className="flex gap-[15px] items-center">
        <Image src="/quai-logo.png" alt="Quai Network Logo" width={35} height={35} />
        {NavButtonContent.map((item, key) => (
          <Button key={key} variant="link" size="sm" className="font-light text-sm" href={item.link} newTab={false}>
            {item.name}
          </Button>
        ))}
      </div>
      <Button variant="outline" size="sm" onClick={connectHandler} disabled={!!account}>
        {account ? (
          <div className="flex gap-[10px]">
            <p className="text-white text-md font-semibold">{sortedQuaiShardNames[account.shard].name}</p>
            <p className="text-gray-300 font-light">{shortenAddress(account.addr)}</p>
          </div>
        ) : (
          'Connect'
        )}
      </Button>
    </div>
  );
};

export default Nav;
