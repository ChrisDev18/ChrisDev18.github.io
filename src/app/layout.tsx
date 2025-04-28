import type { Metadata } from "next";
import "./globals.css";
import {raleway, robotoSlab} from "@/app/fonts";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import NextTopLoader from "nextjs-toploader";


export const metadata: Metadata = {
  title: "Chris Wilson",
  description: "Personal website and portfolio for Chris Wilson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full"}>
      <body className={`min-h-full flex flex-col`}>
        <NextTopLoader />
        {/*<Navbar />*/}
        <main className="flex flex-col overflow-hidden grow">
          {children}
        </main>
        <footer className={`${raleway.className} flex flex-col items-center bg-neutral-950 text-white noise`} >
          <div className={"flex flex-col py-10 px-10 max-w-4xl w-full"}>
            <div className={"flex gap-2 items-center mb-8"}>
              <span className={`${robotoSlab.className} text-2xl text-left font-bold mr-2`}>Chris Wilson</span>
              <a className={"hover:text-blue-500 transition-colors duration-100"} href={"https://www.linkedin.com/in/chriswilson01/"}>
                <LinkedInLogoIcon height="30" width="30"/>
              </a>
              <a className={"hover:text-purple-500 transition-colors duration-100"} href={"https://github.com/ChrisDev18"}>
                <GitHubLogoIcon height="30" width="30"/>
              </a>
            </div>

            <p className="mb-2">Website personally made using React with Next.js</p>
            <p className="mb-4">Styled with Tailwind CSS, animated with Motion.</p>
            <p>All rights reserved 2025</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
