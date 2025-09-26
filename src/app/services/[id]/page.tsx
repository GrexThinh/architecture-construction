import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "./ServiceDetail";

// Next (latest) types `params` as a Promise in app routes.
type Params = Promise<{ id: string }>;

const SERVICE_SLUGS = [
  "residential-construction",
  "commercial-construction",
  "architectural-design",
  "construction-management",
  "structural-engineering",
  "project-planning",
] as const;

const TITLE_MAP: Record<(typeof SERVICE_SLUGS)[number], string> = {
  "residential-construction": "Dự án dân cư",
  "commercial-construction": "Dự án thương mại",
  "architectural-design": "Thiết kế kiến trúc",
  "construction-management": "Quản lý xây dựng",
  "structural-engineering": "Kỹ thuật kết cấu",
  "project-planning": "Lập kế hoạch dự án",
};

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((id) => ({ id }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const title = TITLE_MAP[id as (typeof SERVICE_SLUGS)[number]];
  if (!title)
    return {
      title:
        "Dịch vụ | BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD",
    };

  const fullTitle = `${title} | BINH KHANG INVESTMENT AND CONSTRUCTION - DESIGN CO.,LTD`;
  return {
    title: fullTitle,
    description:
      "Dịch vụ kiến trúc & xây dựng chuyên nghiệp – tư vấn, thiết kế, thi công và quản lý dự án trọn gói.",
    alternates: { canonical: `/services/${id}` },
    openGraph: { title: fullTitle, type: "article" },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  // 404 if unknown slug
  if (!TITLE_MAP[id as (typeof SERVICE_SLUGS)[number]]) {
    notFound();
  }

  return <ServiceDetail id={id} />;
}
