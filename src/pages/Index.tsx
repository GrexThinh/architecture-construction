import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Hammer,
  Users,
  Award,
  ArrowRight,
  Phone,
  House,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const features = [
    {
      icon: Building2,
      title: "Architectural Design",
      description:
        "Innovative and sustainable architectural solutions for residential and commercial projects.",
    },
    {
      icon: Hammer,
      title: "Construction Management",
      description:
        "End-to-end construction management ensuring quality, timeline, and budget adherence.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced architects, engineers, and construction professionals at your service.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Committed to delivering exceptional quality in every project we undertake.",
    },
  ];

  const projects = [
    {
      title: "Modern Office Complex",
      location: "Downtown District",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      title: "Luxury Residential Tower",
      location: "Waterfront Area",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    },
    {
      title: "Cultural Center",
      location: "City Center",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 md:px-6">
          <SidebarTrigger />
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild>
              <Link to="/contact">
                <div className="relative">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300"></span>
                  <Phone className="mr-2 h-4 w-4" />
                </div>
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Building Tomorrow's
                <span className="text-primary block">Architecture Today</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
                We create exceptional architectural designs and deliver
                outstanding construction projects that stand the test of time.
                From concept to completion, we're your trusted partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">
                    View Our Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  className="border-red-500"
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link to="/services">
                    Our Services <House className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Carousel
                className="w-full max-w-lg mx-auto"
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              >
                <CarouselContent>
                  {projects.map((proj, i) => (
                    <CarouselItem key={i} className="basis-full">
                      <div className="relative">
                        <img
                          src={proj.image}
                          alt="Modern Architecture"
                          className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose ArchBuild Pro
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-[800px] mx-auto">
              We combine innovative design, expert craftsmanship, and
              cutting-edge technology to deliver exceptional resSerults for
              every project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Explore some of our most remarkable architectural achievements
            </p>
          </div>
          <Carousel
            className="w-full max-w-6xl mx-auto"
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-lg">
                          {project.title}
                        </h3>
                        <p className="text-sm opacity-90">{project.location}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div> */}
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-[600px] mx-auto opacity-90">
            Let's discuss your vision and turn it into reality. Contact us today
            for a free consultation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="text-primary" size={24} />
                <span className="font-bold text-lg">ArchBuild Pro</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Creating exceptional architectural designs and construction
                solutions since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Architectural Design</li>
                <li>Construction Management</li>
                <li>Project Planning</li>
                <li>Interior Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>888/40 Lac Long Quan</li>
                <li>Tan Hoa Ward, Ho Chi Minh City, Vietnam</li>
                <li>+84 832619515</li>
                <li>info@archbuildpro.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ArchBuild Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
