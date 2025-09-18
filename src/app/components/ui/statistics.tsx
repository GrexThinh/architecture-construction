import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight, Users, Calendar, Building, Award } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

export function StatsGrid() {
  const stats = [
    { icon: Building, value: 200, label: "Dự án đã hoàn thành", suffix: "+" },
    {
      icon: Users,
      value: 50,
      label: "Thành viên đội ngũ chuyên gia",
      suffix: "+",
    },
    { icon: Calendar, value: 5, label: "Năm kinh nghiệm", suffix: "+" },
    { icon: Award, value: 25, label: "Công trình khác nhau", suffix: "+" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="rounded-xl p-6 sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-20">
      <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
        <div className="max-w-xl flex flex-col">
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white leading-14">
            CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG
          </h2>
          <p className="my-6 text-base sm:text-lg leading-relaxed md:leading-8 opacity-90">
            Từ một nhà thầu địa phương đến một công ty lớn đa dịch vụ, chúng tôi
            thực hiện các dự án dân dụng, thương mại và công nghiệp với trọng
            tâm là chất lượng, an toàn và tính bền vững. Chúng tôi tạo ra những
            thiết kế kiến trúc đặc biệt, là đối tác đáng tin cậy của mọi nhà.
          </p>

          <Button size="lg" onClick={() => scrollToSection("#services")}>
            Khám phá dịch vụ của chúng tôi
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="mt-10">
            <img
              src="https://miendongidc.com/upload/baiviet/6fc4332817b2efecb6a3-5629.jpg"
              alt="đội ngũ"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between text-primary dark:text-white">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="py-4"
            >
              <div className="flex items-center gap-4">
                {s.icon && (
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/20">
                    <s.icon className="h-8 w-8" />
                  </div>
                )}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-extrabold leading-none tracking-tight text-[64px] sm:text-[80px]">
                      <CountUp end={s.value} duration={1.2} />
                    </span>
                    {s.suffix && (
                      <span className="text-3xl sm:text-4xl lg:text-5xl -mt-2">
                        {s.suffix}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-lg sm:text-xl">{s.label}</div>
                </div>
              </div>

              {i < stats.length - 1 && (
                <div className="mt-6 h-px bg-[#0f1631]/40 w-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
