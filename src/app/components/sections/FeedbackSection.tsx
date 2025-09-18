import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Testimonial = {
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Nguyễn Văn A",
    role: "Chủ nhà, Quận 7",
    rating: 5,
    quote:
      "Đội ngũ làm việc rất chuyên nghiệp, đúng tiến độ và chất lượng tuyệt vời. Tôi rất hài lòng với công trình hoàn thiện.",
  },
  {
    name: "Trần Thị B",
    role: "Giám đốc vận hành",
    rating: 5,
    quote:
      "Thiết kế sáng tạo, thi công tỉ mỉ. Trải nghiệm làm việc xuyên suốt dự án rất mượt mà và rõ ràng.",
  },
  {
    name: "Lê Quốc C",
    role: "Chủ đầu tư",
    rating: 4,
    quote:
      "Tư vấn tận tâm, báo cáo tiến độ minh bạch. Kết quả cuối cùng vượt mong đợi của chúng tôi.",
  },
];

const FeedbackSection = () => {
  return (
    <section id="feedbacks" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-center font-extrabold text-4xl md:text-5xl mb-3 drop-shadow-lg underline decoration-primary underline-offset-4 decoration-2">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-muted-foreground max-w-[720px] mx-auto">
            Những phản hồi thực tế từ khách hàng sau khi hoàn thành dự án.
          </p>
        </div>

        <Carousel
          className="w-full max-w-6xl mx-auto"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full rounded-xl border bg-card/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-foreground/90">
                    “{t.quote}”
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default FeedbackSection;
