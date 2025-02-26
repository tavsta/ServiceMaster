import { useQuery } from "@tanstack/react-query";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { WrenchIcon, PhoneCall, Clock, Shield } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Home() {
  const { data: services } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });
  const { toast } = useToast();

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Trong thực tế sẽ gửi form đi
    toast({
      title: "Cảm ơn bạn đã liên hệ",
      description: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Yes1</h1>
            <p className="text-xl text-muted-foreground mb-8">Thợ chuyên nghiệp</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <PhoneCall className="h-5 w-5 text-primary" />
                <span>Hỗ trợ 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Clock className="h-5 w-5 text-primary" />
                <span>Phản hồi nhanh</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Bảo hành dài hạn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <WrenchIcon className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Dịch vụ của chúng tôi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Liên hệ với chúng tôi</h2>
              <p className="text-muted-foreground">
                Để lại thông tin để được tư vấn miễn phí
              </p>
            </div>

            <form onSubmit={handleContact} className="space-y-4">
              <div>
                <Input placeholder="Họ và tên" required />
              </div>
              <div>
                <Input type="tel" placeholder="Số điện thoại" required />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea placeholder="Nội dung cần tư vấn" required />
              </div>
              <Button type="submit" className="w-full">
                Gửi thông tin
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}