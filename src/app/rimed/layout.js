import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baylanmen",
  description: "base de donnée de fruits et rimèd razié des antilles guyane",
};

export default function RimedLayout({ children }) {
  return <section>{children}</section>;
}
