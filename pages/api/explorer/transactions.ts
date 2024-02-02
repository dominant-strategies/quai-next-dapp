import type { NextApiRequest, NextApiResponse } from 'next';

// uses the quaiscan API to get a list of transactions for an address (30 transactions)
// endpoint: {chainName}.colosseum.quaiscan.io/api?module=account&action=txlist&address={address}&page=1&offset=30
// more api options: https://cyprus1.colosseum.quaiscan.io/api-docs

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Invalid request method' });
  }
  const explorerUrl = req.body.url;
  const address = req.body.address;
  const url = `${explorerUrl}/api?module=account&action=txlist&address=${address}&page=1&offset=30`;
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json') && response.ok) {
      const transactions = await response.json();
      return res.status(200).json(transactions);
    } else {
      return res.status(500).json({ error: 'Non-JSON response received' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error', status: 500 });
  }
}
