import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Ashish Sutariya | Portfolio",
  description: "Resume & portfolio of Ashish Sutariya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col md:flex-row bg-body-bg text-body-text">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Sidebar />
          <main className="flex-1 md:ml-[300px] md:mr-[60px] min-h-screen overflow-y-auto pt-20 md:pt-0 pb-10 px-4 md:px-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
