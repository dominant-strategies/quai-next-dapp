import type { NextApiRequest, NextApiResponse } from 'next';

// uses the quaiscan API to get a list of ERC721 and ERC20 tokens owned by an address
// endpoint: https://quaiscan.io/api/v2/addresses/{address}/token-balances
// more api options: https://quaiscan.io/api-docs

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Invalid request method' });
  }
  const explorerUrl = req.body.url;
  const address = req.body.address;
  const url = `${explorerUrl}/api/v2/addresses/${address}/token-balances`;
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json') && response.ok) {
      const data = await response.json();
      return res.status(200).json(data);
    } else if (contentType && contentType.includes('application/json') && !response.ok) {
      return res.status(404).json({ error: 'Not found' });
    } else {
      return res.status(500).json({ error: 'Non-JSON response received' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error', status: 500 });
  }
}
