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
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    template:
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
  },
  description:
    "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
  keywords: [
    "BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
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
  openGraph: {
    title:
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    description:
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    url: "https://binhkhangxaydung.vercel.app/",
    siteName: "BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    description:
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
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
  "url": "https://binhkhangxaydung.vercel.app/",
  "logo": "https://binhkhangxaydung.vercel.app/images/logo.jpg",
  "description": "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Binh Khang"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0776597879",
    "contactType": "customer service",
    "areaServed": "VN",
    "availableLanguage": ["Vietnamese", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "463/62/47 Lê Đức Thọ, Phường An Hội Đông, TP.HCM",
    "addressLocality": "TP. Hồ Chí Minh",
    "addressRegion": "HCM",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "sameAs": [
    "https://www.facebook.com",
  ]
}
`}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://binhkhangxaydung.vercel.app/",
  "name": "BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://binhkhangxaydung.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
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
