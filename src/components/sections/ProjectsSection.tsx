import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Khu phức hợp văn phòng hiện đại",
    category: "commercial",
    location: "Khu trung tâm",
    year: "2023",
    team: "15 người",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    description:
      "Khu phức hợp văn phòng hiện đại với thiết kế bền vững và tiện nghi hiện đại.",
  },
  {
    id: 2,
    title: "Tòa nhà dân cư cao cấp",
    category: "residential",
    location: "Khu vực ven biển",
    year: "2023",
    team: "20 người",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
    description:
      "Tòa nhà dân cư cao cấp với tầm nhìn toàn cảnh thành phố và hoàn thiện cao cấp.",
  },
  {
    id: 3,
    title: "Trung tâm văn hóa",
    category: "public",
    location: "Trung tâm thành phố",
    year: "2022",
    team: "25 người",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=300&fit=crop",
    description:
      "Trung tâm văn hóa đa mục đích thúc đẩy nghệ thuật và sự tham gia cộng đồng.",
  },
  {
    id: 4,
    title: "Nhà ở bền vững",
    category: "residential",
    location: "Thung lũng xanh",
    year: "2022",
    team: "12 người",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
    description:
      "Khu phát triển nhà ở thân thiện với môi trường với hệ thống năng lượng tái tạo.",
  },
  {
    id: 5,
    title: "Trung tâm thương mại",
    category: "commercial",
    location: "Quảng trường ngoại ô",
    year: "2021",
    team: "30 người",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    description: "Điểm đến mua sắm hiện đại với không gian bán lẻ đổi mới.",
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { value: "all", label: "Tất cả dự án" },
    { value: "residential", label: "Dân cư" },
    { value: "commercial", label: "Thương mại" },
    { value: "public", label: "Công cộng" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Dự án của chúng tôi
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Khám phá loạt dự án kiến trúc và xây dựng đa dạng của chúng tôi
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                onClick={() => setFilter(category.value)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Hoàn thành năm {project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Đội ngũ {project.team}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Không tìm thấy dự án nào cho danh mục đã chọn.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
