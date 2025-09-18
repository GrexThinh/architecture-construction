"use client";

import { Toaster as Sonner } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import ProjectDetail from "./pages/ProjectDetail";
import { Toaster } from "./components/ui/toaster";
import Index from "./pages/Index";
import { TooltipProvider } from "./components/ui/tooltip";

const queryClient = new QueryClient();

export default function Home() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    // runs only in browser
    setHash(window.location.hash);

    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);

    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isProject = hash.startsWith("#project/");
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isProject ? <ProjectDetail /> : <Index />}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
