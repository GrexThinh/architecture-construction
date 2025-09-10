import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Building, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building, value: '200+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Calendar, value: '15+', label: 'Years of Experience' },
    { icon: Award, value: '25+', label: 'Awards Won' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      experience: '15 years'
    },
    {
      name: 'Michael Chen',
      role: 'Construction Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      experience: '12 years'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Structural Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      experience: '10 years'
    },
    {
      name: 'David Thompson',
      role: 'Project Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      experience: '18 years'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge design technologies and sustainable building practices to create forward-thinking solutions.'
    },
    {
      title: 'Quality',
      description: 'Every project reflects our commitment to excellence, from initial design concepts to final construction details.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with clients, consultants, and contractors to ensure seamless project delivery.'
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of our design philosophy and construction practices.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 md:px-6">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold ml-4">About Us</h1>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Building Excellence Since 2020
                </h2>
                <p className="text-lg text-muted-foreground">
                  ArchBuild Pro is a leading architecture and construction firm dedicated to creating 
                  exceptional spaces that inspire and endure. Our team of experienced professionals 
                  combines innovative design with superior craftsmanship to deliver projects that 
                  exceed expectations.
                </p>
                <p className="text-lg text-muted-foreground">
                  From residential homes to commercial complexes, we approach every project with 
                  the same level of passion, attention to detail, and commitment to quality that 
                  has made us a trusted name in the industry.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                  alt="Our Team"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground text-lg">
                Experienced professionals dedicated to your success
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary">{member.experience} experience</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;