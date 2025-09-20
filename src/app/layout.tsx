import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigation from "./components/TopNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://binhkhangxaydung.vercel.app"),
  title: {
    default:
      "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG - Binh Khang Company",
    template:
      "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG - Binh Khang Company",
  },
  description:
    "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG - Binh Khang Company",
  keywords: [
    "Binh Khang Company",
    "Bình Khang",
    "Xây dựng",
    "Tư vấn",
    "Thiết kế",
    "Kiến trúc",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t); } catch(_) {} })();`,
          }}
        />
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Architecture Construction",
  "url": "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG",
  "logo": "https://binhkhangxaydung.vercel.app/images/logo.jpg",
  "description": "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG - Binh Khang Company",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Binh Khang"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0587030273",
    "contactType": "customer service",
    "areaServed": "VN",
    "availableLanguage": ["Vietnamese", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "888/40 Lạc Long Quân, Phường Tân Hòa",
    "addressLocality": "TP. Hồ Chí Minh",
    "addressRegion": "HCM",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "sameAs": [
    "https://www.facebook.com/grexthinh",
  ]
}
`}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <TopNavigation />
        </header>
        {children}
      </body>
    </html>
  );
}
