import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { UserProvider } from '@auth0/nextjs-auth0/client';



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserProvider>
          {children}
          </UserProvider>
          
        </Providers>
      </body>
    </html>
  );
}