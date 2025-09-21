import React, { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  Play,
  Calendar,
  MapPin,
  Users,
  Award,
  ArrowRight,
  Maximize2,
  Download,
} from "lucide-react";
import TopNavigation from "@/app/components/TopNavigation";
import { Button } from "@/app/components/button";
import { projects } from "@/app/data/projects";
import Link from "next/link";
import { Card, CardContent } from "@/app/components/card";
import Image from "next/image";

type MediaItem = { type: "image" | "video"; src: string; thumb?: string };

const sampleMedia: MediaItem[] = [
  {
    type: "video",
    src: "https://nhadepshouse.com/Giới Thiệu Quy Trình Thiết Kế - Thi Công S-House.mp4",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1600",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const ProjectDetail = () => {
  const [hash, setHash] = useState(window.location.hash);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const projectId = useMemo(() => hash.replace(/^#project\//, ""), [hash]);
  const selectedProject = useMemo(
    () => projects.find((p) => p.id.toString() === projectId),
    [projectId]
  );

  const active = sampleMedia[activeIdx];

  const back = () => {
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const nextImage = () => {
    setActiveIdx((prev) => (prev + 1) % sampleMedia.length);
  };

  const prevImage = () => {
    setActiveIdx(
      (prev) => (prev - 1 + sampleMedia.length) % sampleMedia.length
    );
  };

  // Project metrics based on category
  const getProjectMetrics = () => {
    const baseMetrics = {
      "Thương mại": {
        area: "15,000 m²",
        duration: "18 tháng",
        budget: "50 tỷ VNĐ",
      },
      "Dân cư": { area: "8,500 m²", duration: "12 tháng", budget: "25 tỷ VNĐ" },
      "Công cộng": {
        area: "12,000 m²",
        duration: "24 tháng",
        budget: "40 tỷ VNĐ",
      },
    };
    return (
      baseMetrics[selectedProject?.category as keyof typeof baseMetrics] ||
      baseMetrics["Thương mại"]
    );
  };

  const metrics = getProjectMetrics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <TopNavigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Button
            variant="default"
            onClick={back}
            className="mb-8 group transition-colors duration-200"
            aria-label="Quay lại trang dự án"
          >
            <ChevronLeft
              className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
            Quay lại dự án
          </Button>

          {/* Header Section */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {selectedProject?.title}
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  {selectedProject?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
            {/* Media Gallery Section */}
            <div className="xl:col-span-3 space-y-8">
              {/* Main Media Display */}
              <div className="relative group">
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl"
                  role="img"
                  aria-label={`Hình ảnh chính của dự án ${selectedProject?.title}`}
                >
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  )}
                  {active.type === "image" ? (
                    <Image
                      src={active.src}
                      alt={`${selectedProject?.title} - Hình ảnh chính`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      onLoad={() => setImageLoading(false)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                      priority
                    />
                  ) : (
                    <video
                      src={active.src}
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      onLoadedData={() => setImageLoading(false)}
                    />
                  )}

                  {/* Overlay Controls */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={toggleFullscreen}
                        className="backdrop-blur-sm bg-white/90 hover:bg-white"
                        aria-label="Xem toàn màn hình"
                      >
                        <Maximize2 className="h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="backdrop-blur-sm bg-white/90 hover:bg-white"
                        aria-label="Tải xuống hình ảnh"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Hình ảnh trước"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Hình ảnh tiếp theo"
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Thumbnail Gallery */}
                <div className="mt-6">
                  <div
                    className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
                    role="tablist"
                    aria-label="Thư viện hình ảnh dự án"
                  >
                    {sampleMedia.map((m, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`w-30 m-1 relative flex-shrink-0 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          i === activeIdx
                            ? "ring-2 ring-primary border-primary shadow-lg scale-105"
                            : "border-gray-200 hover:border-gray-300 hover:scale-102"
                        }`}
                        role="tab"
                        aria-selected={i === activeIdx}
                        aria-label={`${
                          m.type === "image" ? "Hình ảnh" : "Video"
                        } ${i + 1}`}
                        title={`${m.type === "image" ? "Hình ảnh" : "Video"} ${
                          i + 1
                        }`}
                      >
                        {m.type === "image" ? (
                          <Image
                            src={m.src}
                            alt={`${selectedProject?.title} - Hình thu nhỏ ${
                              i + 1
                            }`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
                          />
                        ) : (
                          <div className="relative h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <Play
                              className="text-white h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                        {i === activeIdx && (
                          <div className="absolute inset-0 bg-primary/20"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Overview Section */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Tổng quan dự án
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {selectedProject?.description} Dự án này thể hiện sự kết hợp
                    hoàn hảo giữa thiết kế hiện đại và tính bền vững, tạo ra một
                    không gian sống và làm việc lý tưởng cho cộng đồng.
                  </p>

                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    Đặc điểm nổi bật
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Hệ thống HVAC tiết kiệm năng lượng
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Tự động hóa thông minh
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Khu vườn trên mái và khu vui chơi
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Bãi đỗ xe ngầm cho 100 xe
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Chứng nhận LEED Gold
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Trung tâm thể thao và spa hiện đại
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    Thách thức & Giải pháp
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Thách thức chính là tích hợp thiết kế hiện đại với đặc trưng
                    khu phố lịch sử trong khi đáp ứng các tiêu chuẩn môi trường
                    nghiêm ngặt. Đội ngũ của chúng tôi đã phát triển các giải
                    pháp sáng tạo sử dụng vật liệu bền vững và hệ thống tiết
                    kiệm năng lượng.
                  </p>
                </div>

                {/* Additional Gallery */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Thư viện hình ảnh
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleMedia.map((media, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {media.type === "image" ? (
                          <Image
                            src={media.src}
                            alt={`${selectedProject?.title} - Hình ảnh ${
                              index + 1
                            }`}
                            width={400}
                            height={256}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <video
                            src={media.src}
                            className="w-full h-64 object-cover"
                            controls
                            muted
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="xl:col-span-1 space-y-6">
              {/* Project Info Card */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Thông tin dự án
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500">
                          Năm hoàn thành
                        </span>
                        <p className="font-medium text-gray-900">
                          {selectedProject?.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500">Địa điểm</span>
                        <p className="font-medium text-gray-900">
                          {selectedProject?.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500">Đội ngũ</span>
                        <p className="font-medium text-gray-900">
                          {selectedProject?.team}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2"
                      >
                        Bắt đầu dự án của bạn
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Metrics */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-blue-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">
                    Thông số kỹ thuật
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Diện tích</span>
                      <span className="font-medium text-gray-900">
                        {metrics.area}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Thời gian</span>
                      <span className="font-medium text-gray-900">
                        {metrics.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Ngân sách</span>
                      <span className="font-medium text-gray-900">
                        {metrics.budget}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description Card */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Mô tả chi tiết
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedProject?.description} Dự án này được thiết kế với
                    tiêu chí bền vững và thân thiện với môi trường, mang lại giá
                    trị lâu dài cho cộng đồng.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
      </main>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Đóng chế độ toàn màn hình"
          >
            <Maximize2 className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="relative max-w-7xl max-h-full">
            {active.type === "image" ? (
              <Image
                src={active.src}
                alt={`${selectedProject?.title} - Toàn màn hình`}
                width={1920}
                height={1080}
                className="max-w-full max-h-full object-contain"
                sizes="100vw"
              />
            ) : (
              <video
                src={active.src}
                className="max-w-full max-h-full"
                controls
                autoPlay
                muted
                loop
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
