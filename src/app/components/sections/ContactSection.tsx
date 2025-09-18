import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MapPin, Phone, MapPinHouse } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "@/app/hooks/use-toast";

const ContactSection = () => {
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
      title: "Tin nhắn đã được gửi!",
      description: "Chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Thăm văn phòng của chúng tôi",
      details: [
        "888/40 Lạc Long Quân, Phường Tân Hòa, TP. Hồ Chí Minh, Việt Nam",
        "Giờ làm việc: Thứ Hai - Thứ Sáu: 8:00 - 18:00",
      ],
    },
    {
      icon: Phone,
      title: "Liên hệ chúng tôi",
      details: ["0832619515", "Email: info@archbuildpro.com"],
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted/50 dark:bg-muted/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-center font-extrabold text-4xl md:text-5xl mb-6 drop-shadow-lg underline decoration-primary underline-offset-4 decoration-2">
            Hãy cùng hợp tác xây dựng công trình tuyệt vời
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Sẵn sàng bắt đầu dự án tiếp theo của bạn? Liên hệ với đội ngũ của
            chúng tôi để được tư vấn miễn phí và hãy thảo luận cách chúng tôi có
            thể biến tầm nhìn của bạn thành hiện thực.
          </p> */}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn cho chúng tôi</CardTitle>
              <CardDescription>
                Điền vào biểu mẫu bên dưới và chúng tôi sẽ liên hệ lại với bạn
                trong vòng 24 giờ.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Họ và tên của bạn"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="email.cua.ban@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+84 123 456 789"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Dịch vụ cần thiết</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn một dịch vụ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value=" Thiết kế kiến trúc">
                          Thiết kế kiến trúc
                        </SelectItem>
                        <SelectItem value="Quản lý xây dựng">
                          Quản lý xây dựng
                        </SelectItem>
                        <SelectItem value="Kỹ thuật kết cấu">
                          Kỹ thuật kết cấu
                        </SelectItem>
                        <SelectItem value="Lập kế hoạch dự án">
                          Lập kế hoạch dự án
                        </SelectItem>
                        <SelectItem value="Dân cư">Dự án dân cư</SelectItem>
                        <SelectItem value="Thương mại">
                          Dự án thương mại
                        </SelectItem>
                        <SelectItem value="Tư vấn">Tư vấn chung</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tin nhắn</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Hãy cho chúng tôi biết về dự án của bạn..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Gửi tin nhắn
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
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
                  <span>888/40 Lạc Long Quân, TP. Hồ Chí Minh, Việt Nam</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
