"use client";

import { useState } from "react";
import { Badge } from "../components/badge";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { projects } from "../data/projects";

// export const metadata = {
//   title: "Projects",
//   description: "Selected construction projects delivered by SolidBuild Co.",
// };

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Tất cả");

  const categories = [
    { value: "Tất cả", label: "Tất cả dự án" },
    { value: "Dân cư", label: "Dân cư" },
    { value: "Thương mại", label: "Thương mại" },
  ];

  const filteredProjects =
    filter === "Tất cả"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mt-24 mb-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-6 drop-shadow-lg decoration-primary decoration-2">
          Dự án của chúng tôi
        </h2>
        {/* <p className="text-muted-foreground text-lg mb-8">
            Khám phá loạt dự án kiến trúc và xây dựng đa dạng của chúng tôi
          </p> */}

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => {
              window.location.hash = `#project/${project.id}`;
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-0 cursor-pointer"
          >
            <div className="relative p-2 bg-white border border-gray-300">
              <div className="relative aspect-[4/5]">
                {(() => {
                  const images = [project.image, project.image];
                  return (
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 translate-x-[-12px] translate-y-[12px] -rotate-2 p-2 bg-white border border-gray-300 rounded-sm shadow-sm">
                        <img
                          src={images[1]}
                          alt=""
                          className="h-full w-full object-cover rounded-[2px]"
                        />
                      </div>
                      <div className="absolute inset-0 p-2 bg-white border border-gray-300 rounded-sm ring-1 ring-black/5 overflow-hidden">
                        <img
                          src={images[0]}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-[2px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity rounded-sm"></div>
                        <div className="absolute inset-0 flex items-end justify-center pb-6 px-4 text-center">
                          <h3 className="absolute top-10 text-white text-base sm:text-lg md:text-xl font-bold tracking-wide leading-snug uppercase drop-shadow-md">
                            {project.title}
                          </h3>
                        </div>
                        <Badge className="absolute top-3 left-3 bg-primary text-white rounded-sm">
                          {project.category}
                        </Badge>
                        <button className="cursor-pointer text-white absolute bottom-3 left-1/2 -translate-x-1/2 p-2 bg-primary rounded-lg transition-transform duration-300 group-hover:scale-105">
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
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
  );
}
