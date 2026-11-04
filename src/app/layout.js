import { Unbounded, Geist_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yevhenii Shorobura — Full-Stack Engineer & Product Builder",
  description:
    "Full-stack engineer and product builder originally from Kyiv, Ukraine, based in Munich. Solo builder behind Shorado in production.",
  keywords: [
    "Yevhenii Shorobura",
    "Full-Stack Engineer",
    "Shorado",
    "Software Engineer Munich",
    "React",
    "Next.js",
    "Node.js",
    "Fastify",
    "PostgreSQL",
  ],
  authors: [{ name: "Yevhenii Shorobura" }],
  openGraph: {
    title: "Yevhenii Shorobura — Full-Stack Engineer & Product Builder",
    description:
      "Full-stack engineer and product builder originally from Kyiv, Ukraine, based in Munich. Solo builder behind Shorado in production.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${geistMono.variable} h-full antialiased selection:bg-accent selection:text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#050102] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
