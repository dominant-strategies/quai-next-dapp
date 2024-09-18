// calls the /api/explorer/tokens endpoint to fetch tokens from the explorer
export const fetchTokens = async (address: string, url: string) => {
  const body = {
    address: address,
    url: url,
  };
  const response = await fetch('/api/explorer/tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    return null; // Return null if the response is not ok
  } else {
    const tokens = await response.json();
    return tokens; // Return the tokens if the response is ok
  }
};

// calls the /api/explorer/transactions endpoint to fetch transactions from the explorer
export const fetchTransactions = async (address: string, url: string) => {
  const body = {
    address: address,
    url: url,
  };
  const response = await fetch('/api/explorer/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    return null; // Return null if the response is not ok
  } else {
    const transactions = await response.json();
    if (transactions.items) {
      for (let i = 0; i < transactions.items.length; i++) {
        const date = new Date(transactions.items[i].timestamp).toLocaleDateString();
        transactions.items[i].timestamp = date;
      }
      return transactions; // Return the transactions if the response is ok
    } else {
      return []; // Return an empty array if there are no transactions
    }
  }
};
