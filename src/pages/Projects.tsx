import React, { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      location: 'Downtown District',
      year: '2023',
      team: '15 people',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
      description: 'A state-of-the-art office complex featuring sustainable design and modern amenities.'
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      location: 'Waterfront Area',
      year: '2023',
      team: '20 people',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
      description: 'High-end residential tower with panoramic city views and premium finishes.'
    },
    {
      id: 3,
      title: 'Cultural Center',
      category: 'public',
      location: 'City Center',
      year: '2022',
      team: '25 people',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=300&fit=crop',
      description: 'Multi-purpose cultural center promoting arts and community engagement.'
    },
    {
      id: 4,
      title: 'Sustainable Housing',
      category: 'residential',
      location: 'Green Valley',
      year: '2022',
      team: '12 people',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
      description: 'Eco-friendly housing development with renewable energy systems.'
    },
    {
      id: 5,
      title: 'Shopping Mall',
      category: 'commercial',
      location: 'Suburban Plaza',
      year: '2021',
      team: '30 people',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      description: 'Modern shopping destination with innovative retail spaces.'
    },
    {
      id: 6,
      title: 'Public Library',
      category: 'public',
      location: 'University District',
      year: '2021',
      team: '18 people',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      description: 'Contemporary library design fostering learning and community interaction.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'public', label: 'Public' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 md:px-6">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold ml-4">Our Projects</h1>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Explore our diverse range of architectural and construction projects
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
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
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className="absolute top-2 right-2 bg-primary text-primary-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Completed in {project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Team of {project.team}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;