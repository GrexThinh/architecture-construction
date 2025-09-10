import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Hammer, PenTool, Cog, Home, Building, Landmark, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Architectural Design',
      description: 'Complete architectural design services from concept to construction documents.',
      features: ['3D Modeling & Visualization', 'Sustainable Design Solutions', 'Building Code Compliance', 'Interior Space Planning']
    },
    {
      icon: Hammer,
      title: 'Construction Management',
      description: 'Full-service construction management ensuring quality and timely delivery.',
      features: ['Project Scheduling', 'Quality Control', 'Budget Management', 'Safety Compliance']
    },
    {
      icon: Building2,
      title: 'Structural Engineering',
      description: 'Expert structural engineering services for safe and efficient buildings.',
      features: ['Structural Analysis', 'Foundation Design', 'Seismic Engineering', 'Load Calculations']
    },
    {
      icon: Cog,
      title: 'Project Planning',
      description: 'Comprehensive project planning and feasibility studies.',
      features: ['Site Analysis', 'Zoning Research', 'Cost Estimation', 'Timeline Development']
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Custom residential design and construction services.',
      features: ['Custom Homes', 'Renovations', 'Additions', 'Landscape Integration']
    },
    {
      icon: Building,
      title: 'Commercial Projects',
      description: 'Commercial and industrial building solutions.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial meeting to understand your vision, requirements, and budget.'
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Creating detailed designs and 3D visualizations for your approval.'
    },
    {
      step: '03',
      title: 'Planning & Permits',
      description: 'Handling all necessary permits and regulatory approvals.'
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Professional construction management from groundbreaking to completion.'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Final walkthrough and handover of your completed project.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 md:px-6">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold ml-4">Our Services</h1>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Comprehensive Architecture & Construction Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              From initial concept to final construction, we provide end-to-end solutions 
              for all your architectural and building needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground text-lg">
                A streamlined approach to bring your vision to life
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-[600px] mx-auto">
              Contact us today to discuss your architectural and construction needs. 
              We're here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;