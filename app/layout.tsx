import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "imgs/macmsa-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-[#570326] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-full flex-grow">
              <CustomCursor />
              {children}
            </main>
            <footer className="w-full flex items-center justify-center font-medium py-3 bg-[#F0FFC9]">
              <span className="text-[#570326]">© MIMC at</span>
              <Link
                isExternal
                className="flex items-center gap-1 text-current ml-1.5"
                href="https://macmsa.com"
                title="macmsa website"
              >
                <p className="text-[#570326] underline">MacMSA</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}