import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title:
    "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG - Binh Khang Company",
  description: "Thiết kế và xây dựng",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logo.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${oswald.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
