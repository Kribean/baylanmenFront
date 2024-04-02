import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baylanmen",
  description: "base de donnée de fruits et rimèd razié des antilles guyane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
