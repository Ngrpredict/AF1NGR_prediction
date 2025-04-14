import React, { useState } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const wallets = [
  {
    label: 'USDT (ERC20)',
    address: '0xb4a92ecbdea143ba1dbfe11298e589e3d3242f77',
  },
  {
    label: 'USDC (ERC20)',
    address: '0xb4a92ecbdea143ba1dbfe11298e589e3d3242f77',
  },
  {
    label: 'SOL (Solana)',
    address: '2RGGZm2SqRdge1HC9TWaVEWNnhKGcQbwBf2TvdAR9Kw7',
  },
  {
    label: 'BTC (Bitcoin)',
    address: '15NH4LA8JJXSmCFXWWLvyNU8yu57gm6x8K',
  },
  {
    label: 'XRP (XRP Ledger)',
    address: 'rJn2zAPdFA193sixJwuFixRkYDUtx3apQh (Tag: 501283470)',
  },
];

const CryptoSection = () => {
  const { currentUser } = useAuth();
  const [copied, setCopied] = useState('');

  if (!currentUser) {
    return (
      <div className="text-center text-red-500 p-4">
        🔐 Please log in to view crypto payment addresses.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Pay with Crypto</h2>
      <p className="mb-2 text-gray-600">Click any wallet to copy:</p>
      {wallets.map((wallet, idx) => (
        <div key={idx} className="flex justify-between items-center bg-white p-3 rounded shadow mb-3">
          <span className="text-sm font-medium">{wallet.label}</span>
          <CopyToClipboard text={wallet.address} onCopy={() => setCopied(wallet.label)}>
            <button className="text-blue-600 text-xs border px-2 py-1 rounded hover:bg-blue-100">
              Copy
            </button>
          </CopyToClipboard>
        </div>
      ))}
      {copied && <p className="text-green-600 mt-2">Copied {copied} address ✅</p>}
    </div>
  );
};

export default CryptoSection;
