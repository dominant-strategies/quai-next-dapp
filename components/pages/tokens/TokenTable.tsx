import { quais } from 'quais';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Spinner } from '@/components/ui';

import { shortenAddress, buildAddressUrl } from '@/lib/utils';
import { Button } from '@/components/ui';

const TokenTable = ({ tokenData, loading }: TokenTableProps) => {
  const ERC20Tokens: TokenReturn[] = tokenData?.ERC20;
  return (
    <div className="w-full py-[20px]">
      {ERC20Tokens && !loading ? (
        <div className="border-[2px] rounded-xl px-[24px] py-[18px]">
          <Table>
            <TableCaption>Unique Tokens: {ERC20Tokens ? ERC20Tokens.length : '0'}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ERC20Tokens.map((token, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <div className="gap-[10px]">
                      <Avatar>
                        <AvatarImage src={''} />
                        <AvatarFallback>{token.token.name}</AvatarFallback>
                      </Avatar>
                      <p>{token.token.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>{quais.formatUnits(token.value.toString(), 'ether')}</TableCell>
                  <TableCell>
                    <Button href={buildAddressUrl(token.token.address)} variant="link" newTab={true} size="sm">
                      {shortenAddress(token.token.address)}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="w-full py-[20px] flex justify-center items-center">
          {loading ? <Spinner /> : <p>There was an error fetching your tokens. Please try again.</p>}
        </div>
      )}
    </div>
  );
};

export default TokenTable;
