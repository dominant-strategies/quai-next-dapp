import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { shortenAddress, buildTransactionUrl, buildAddressUrl, txType } from '@/lib/utils';
import { Button, Badge, Spinner } from '@/components/ui';

const TransactionTable = ({ transactionData, loading }: TransactionTableProps) => {
  return (
    <div className="w-full py-[20px]">
      {transactionData !== undefined && !loading ? (
        <div className="border-[2px] rounded-xl px-[24px] py-[18px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hash</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Gas used</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactionData.map((tx: any, key: number) => (
                <TableRow key={key}>
                  <TableCell>
                    <Button href={buildTransactionUrl(tx.hash)} variant="link" newTab={true} size="sm">
                      {shortenAddress(tx.hash)}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{txType(tx)}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button href={buildAddressUrl(tx.from ? tx.from.hash : '')} variant="link" newTab={true} size="sm">
                      {tx.from ? shortenAddress(tx.from.hash) : 'N/A'}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      href={tx.to !== null ? buildAddressUrl(tx.to.hash) : undefined}
                      variant="link"
                      newTab={true}
                      size="sm"
                    >
                      {tx.to !== null ? shortenAddress(tx.to.hash) : ''}
                    </Button>
                  </TableCell>
                  <TableCell>{tx.gas_used} gwei</TableCell>
                  <TableCell>{tx.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant={tx.status === 'ok' ? 'success' : 'failure'}>
                      {tx.status === 'ok' ? 'Success' : 'Failed'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="w-full py-[20px] flex justify-center items-center">
          {loading ? <Spinner /> : <p>There was an error fetching your transactions. Please try again.</p>}
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
