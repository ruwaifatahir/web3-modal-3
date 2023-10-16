import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

// 1. Get projectId
const projectId = "647b5c20f4dada6302b6002805704047";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  // includeWalletIds: [
  //   "fbea6f68df4e6ce163c144df86da89f24cb244f19b53903e26aea9ab7de6393c",
  // ],
  customWallets: [
    {
      id: "fbea6f68df4e6ce163c144df86da89f24cb244f19b53903e26aea9ab7de6393c",
      name: "Klever",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
