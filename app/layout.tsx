import "./globals.css";
import type { Metadata } from "next";
import "@fontsource/be-vietnam-pro";


export const metadata: Metadata = {
  title: "Search Github Profiles",
  description: "github profile finder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950">{children}</body>
    </html>
  );
}
