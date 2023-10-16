import Image from "next/image";
import { Inter } from "next/font/google";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { open } = useWeb3Modal();

  return <button onClick={() => open()}>Open Connect Modal</button>;
}
