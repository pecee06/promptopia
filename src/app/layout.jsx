import { Inter } from "next/font/google";
import "./globals.css";
import {Nav, Provider} from "@/components/components"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <Nav/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
