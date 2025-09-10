import React, { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MapPinHouse } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "888/40 Lac Long Quan",
        "Tan Hoa Ward, Ho Chi Minh City, Vietnam",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+84 832619515", "+84 832612464", "Mon-Fri 8AM-6PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@archbuildpro.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 md:px-6">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold ml-4">Contact Us</h1>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Ready to start your next project? Get in touch with our team for a
              free consultation and let's discuss how we can bring your vision
              to life.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          placeholder="+84 832619515"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleChange("service", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="architectural-design">
                              Architectural Design
                            </SelectItem>
                            <SelectItem value="construction-management">
                              Construction Management
                            </SelectItem>
                            <SelectItem value="structural-engineering">
                              Structural Engineering
                            </SelectItem>
                            <SelectItem value="project-planning">
                              Project Planning
                            </SelectItem>
                            <SelectItem value="residential">
                              Residential Projects
                            </SelectItem>
                            <SelectItem value="commercial">
                              Commercial Projects
                            </SelectItem>
                            <SelectItem value="consultation">
                              General Consultation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    We're here to help with all your architectural and
                    construction needs. Reach out to us through any of the
                    following channels.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <info.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2">{info.title}</h4>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p
                                  key={idx}
                                  className="text-sm text-muted-foreground"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Map Placeholder */}
                <Card>
                  <CardContent className="pt-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4009997531075!2d106.64748677480486!3d10.780567989368446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eb82c3e818b%3A0x5dedd34a204b0cea!2zODg4IEzhuqFjIExvbmcgUXXDom4sIFBoxrDhu51uZyA4LCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1757514370985!5m2!1svi!2s"
                      width="600"
                      height="450"
                      loading="lazy"
                      className="w-full"
                    ></iframe>
                    <p className="flex items-center text-sm text-muted-foreground pt-3">
                      <MapPinHouse className="mr-2 h-4 w-4" />
                      <span>
                        888/40 Lac Long Quan, Ho Chi Minh City, Vietnam
                      </span>
                    </p>
                    {/* <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
