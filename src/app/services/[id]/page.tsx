import ServiceDetail from "./ServiceDetail";

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  return <ServiceDetail params={params} />;
}
