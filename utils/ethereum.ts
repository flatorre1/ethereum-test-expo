import { BrowserProvider } from 'ethers';

// window.ethereum is not defined for the typescript compiler, so it must be defined
declare global {
    interface Window {
      ethereum: any;
    }
}

export const connectWallet = async () => {
  if (!window.ethereum) {
    alert('The Ethereum wallet was not detected. You can install MetaMask or another wallet.');
    return;
  }

  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' }); // Getting the user's Ethereum account
    const provider = new BrowserProvider(window.ethereum); // Getting the wallet's Provider
    const signer = await provider.getSigner(); // Getting the signer object
    const address = await signer.getAddress(); // Finally, getting the wallet address
    console.log('Connected wallet:', address);
  } catch (error) {
    console.error('Error getting the wallet:', error);
  }
};
