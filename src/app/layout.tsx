// app/layout.tsx
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

const SITE_URL = "https://binhkhang.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/logo.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: `${SITE_URL}/`,
    siteName: "BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: OG_IMAGE, // absolute URL
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
    images: [OG_IMAGE], // absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Architecture Construction",
    url: `${SITE_URL}/`,
    logo: OG_IMAGE,
    description:
      "CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ BÌNH KHANG - BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    foundingDate: "2022-03-14",
    founders: [{ "@type": "Person", name: "Binh Khang" }],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84776597879",
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["vi", "en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "463/62/47 Lê Đức Thọ, Phường An Hội Đông, TP.HCM",
      addressLocality: "TP. Hồ Chí Minh",
      addressRegion: "Ho Chi Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `${SITE_URL}/`,
    name: "BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    // Nếu sau này làm trang /search, có thể thêm SearchAction vào đây
  };

  return (
    <html lang="vi">
      <head>
        {/* JSON-LD (valid JSON qua JSON.stringify) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
