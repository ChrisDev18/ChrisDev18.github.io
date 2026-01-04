import type { Metadata } from "next";
import "./globals.css";
import {raleway, merriweather} from "@/app/fonts";
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
      <head>
        <meta name="apple-mobile-web-app-title" content="Chris" />
      </head>
      <body className={`${raleway.variable} ${merriweather.variable} min-h-full flex flex-col`}>
        <NextTopLoader />
        {/*<Navbar />*/}
        <main className="font-sans flex flex-col overflow-hidden grow">
          {children}
        </main>
        <footer className={`font-sans flex flex-col items-center bg-neutral-950 text-white noise`} >
          <div className={"flex flex-col p-8 md:p-16 max-w-6xl w-full"}>
            <div className={"flex gap-2 items-center mb-8"}>
              <span className={`font-serif text-2xl text-left font-bold mr-2`}>Chris Wilson</span>
              <a className={"hover:text-blue-500 transition-colors duration-100"} href={"https://www.linkedin.com/in/chriswilson01/"}>
                <LinkedInLogoIcon height="30" width="30"/>
              </a>
              <a className={"hover:text-purple-500 transition-colors duration-100"} href={"https://github.com/ChrisDev18"}>
                <GitHubLogoIcon height="30" width="30"/>
              </a>
            </div>

            <p className="mb-2">Website personally made using React with Next.js</p>
            <p className="mb-4">Styled with Tailwind CSS, animated with Motion.</p>
            <p>All rights reserved {(new Date()).getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
