import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Building2, Home, FolderOpen, Wrench, Users, Phone } from 'lucide-react';

export function AppSidebar() {
  const location = useLocation();
  
  const menuItems = [
    { title: 'Home', icon: Home, href: '/' },
    { title: 'Our Projects', icon: FolderOpen, href: '/projects' },
    { title: 'Our Services', icon: Wrench, href: '/services' },
    { title: 'About Us', icon: Users, href: '/about' },
    { title: 'Contact Us', icon: Phone, href: '/contact' },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-3 px-4 py-4">
          <Building2 className="text-primary" size={36} />
          <div>
            <h1 className="text-xl font-bold text-primary">ArchBuild</h1>
            <p className="text-sm text-muted-foreground">Since 2020</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.href}>
                    <Link to={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}