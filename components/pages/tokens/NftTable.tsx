import { quais } from 'quais';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Spinner } from '@/components/ui';

import { shortenAddress, buildAddressUrl } from '@/lib/utils';
import { Button } from '@/components/ui';

const NftTable = ({ tokenData, loading }: TokenTableProps) => {
  const nfts: TokenReturn[] = tokenData?.ERC721;
  return (
    <div className="w-full py-[20px]">
      {nfts && !loading ? (
        <div className="border-[2px] rounded-xl px-[24px] py-[18px]">
          <Table>
            <TableCaption>Total Collections: {nfts ? nfts.length : '0'}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nfts.map((collection, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <div className="flex gap-[10px]">
                      <Avatar>
                        <AvatarImage src={''} />
                        <AvatarFallback>{collection.token.name}</AvatarFallback>
                      </Avatar>
                      <p>{collection.token.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>{collection.value.toString()}</TableCell>
                  <TableCell>
                    <Button href={buildAddressUrl(collection.token.address)} variant="link" newTab={true} size="sm">
                      {shortenAddress(collection.token.address)}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="w-full py-[20px] flex justify-center items-center">
          {loading ? <Spinner /> : <p>There was an error loading your NFTs. Please try again.</p>}
        </div>
      )}
    </div>
  );
};

export default NftTable;
