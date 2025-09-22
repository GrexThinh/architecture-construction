"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Star,
  Info,
  Hammer,
  Home,
  FolderOpen,
  Phone,
} from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const navItems = [
    { label: "Trang chủ", href: isMainPage ? "#home" : "/", icon: Home },
    {
      label: "Về chúng tôi",
      href: isMainPage ? "#about" : "/#about",
      icon: Info,
    },
    {
      label: "Dịch vụ",
      href: isMainPage ? "#services" : "/#services",
      icon: Hammer,
    },
    {
      label: "Dự án",
      href: isMainPage ? "#projects" : "/#projects",
      icon: FolderOpen,
    },
    {
      label: "Đánh giá",
      href: isMainPage ? "#feedbacks" : "/#feedbacks",
      icon: Star,
    },
    {
      label: "Liên hệ",
      href: isMainPage ? "#contact" : "/#contact",
      icon: Phone,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  function getInitialTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (isMainPage) {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.location.hash = "";
      } else {
        const isProjectDetail = window.location.hash.startsWith("#project/");
        window.location.hash = href;
        if (!isProjectDetail) {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`z-50 transition-all duration-300 
    fixed top-0 left-0 right-0
    ${isScrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      {/* ===== MOBILE HEADER (default) ===== */}
      <div className="md:hidden">
        {/* Row 1: brand on black */}
        <div className="bg-black-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center gap-3 py-2">
              <img
                src="/images/logo.jpg"
                alt="logo"
                className="w-10 h-10 object-cover rounded-sm"
              />
              <div>
                <h1 className="font-bold text-primary text-sm leading-tight">
                  <span className="block">CÔNG TY XÂY DỰNG BÌNH KHANG</span>
                </h1>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="text-yellow-500 inline-block"
                      fill="currentColor"
                      size={14}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: menu left, languages + theme right */}
        <div className="bg-zinc-100 text-zinc-900 border-b sticky top-0 z-40 py-2">
          {/* 👆 adjust top-[48px] to the height of your brand row */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              {/* Menu button */}
              <button
                type="button"
                aria-label="Mở menu"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                onClick={() => setIsMenuOpen((s) => !s)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span>Menu</span>
              </button>

              {/* Flags + Theme toggle */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Link href="#" aria-label="Tiếng Việt">
                    <img
                      src="https://flagicons.lipis.dev/flags/4x3/vn.svg"
                      alt="VN"
                      className="h-4 w-[22px] rounded-sm ring-1 ring-zinc-300"
                    />
                  </Link>
                  <Link href="#" aria-label="English">
                    <img
                      src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                      alt="EN"
                      className="h-4 w-[22px] rounded-sm ring-1 ring-zinc-300"
                    />
                  </Link>
                </div>

                {/* Theme toggle (unchanged behavior) */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggle}
                  className="h-9 w-9"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Chuyển đổi giao diện</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer (full width) */}
        {isMenuOpen && (
          <div className="border-t bg-black backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-center gap-2 w-full text-left px-2 py-2 
                         text-primary decoration-primary decoration-2 
                         hover:decoration-4 hover:bg-muted/50 
                         transition-all font-semibold tracking-wide rounded"
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===== DESKTOP HEADER (≥ md) ===== */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo + name (desktop keeps your current layout) */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="logo"
                className="w-12 h-12 rounded-sm object-cover"
              />
              <div>
                <h1 className="text-base font-bold text-primary leading-tight">
                  CÔNG TY TNHH XÂY DỰNG BÌNH KHANG
                </h1>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="text-yellow-500 inline-block"
                      fill="currentColor"
                      size={18}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Nav */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`${
                    isScrolled ? "text-primary" : "text-white"
                  } text-base cursor-pointer text-foreground hover:underline decoration-primary underline-offset-8 decoration-2 hover:decoration-4 transition-all font-semibold tracking-wide`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right: flags + theme toggle (kept) */}
            <div className="flex items-center gap-2">
              <Link href="#" aria-label="Tiếng Việt">
                <img
                  src="https://flagicons.lipis.dev/flags/4x3/vn.svg"
                  alt="VN"
                  className="h-[18px] w-6 rounded-sm ring-1 ring-zinc-300"
                />
              </Link>
              <Link href="#" aria-label="English">
                <img
                  src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                  alt="EN"
                  className="h-[18px] w-6 rounded-sm ring-1 ring-zinc-300"
                />
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggle}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Chuyển đổi giao diện</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
