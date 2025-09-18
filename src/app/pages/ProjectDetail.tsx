"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, Play } from "lucide-react";
import { projects } from "../components/sections/ProjectsSection";
import TopNavigation from "../components/TopNavigation";
import { Button } from "../components/ui/button";
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
];

const ProjectDetail = () => {
  const [hash, setHash] = useState(window.location.hash);
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
  const [activeIdx, setActiveIdx] = useState(0);
  const active = sampleMedia[activeIdx];

  const back = () => {
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <TopNavigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 md:p-6">
          <Button
            variant="ghost"
            onClick={back}
            className="mb-6 underline underline-offset-2 text-md"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại dự án
          </Button>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 underline decoration-primary underline-offset-4 decoration-2">
            {selectedProject?.title} #{projectId || "001"}
          </h1>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Thư viện ảnh và video tổng hợp thể hiện quá trình và kết quả dự án.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden border bg-black/5">
                {active.type === "image" ? (
                  <img
                    src={active.src}
                    alt="project"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    src={active.src}
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                  />
                )}
                {active.type === "video" && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="rounded-full bg-black/30 p-4">
                      <Play className="text-white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {sampleMedia.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`relative aspect-video rounded-md overflow-hidden border ${
                      i === activeIdx ? "ring-2 ring-primary" : ""
                    }`}
                    title={m.type}
                  >
                    {m.type === "image" ? (
                      <img
                        src={m.src}
                        alt="thumb"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="relative h-full w-full bg-black/60">
                        <Play className="absolute inset-0 m-auto text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Thông tin dự án</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Mã dự án: {projectId || "001"}</li>
                  <li>Tên dự án: {selectedProject?.title}</li>
                  <li>Loại: {selectedProject?.category}</li>
                  <li>Địa điểm: {selectedProject?.location}</li>
                  <li>Năm: {selectedProject?.year}</li>
                  <li>Team: {selectedProject?.team}</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Mô tả</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedProject?.description}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
