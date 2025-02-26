import { useQuery } from "@tanstack/react-query";
import ServiceCard from "@/components/ServiceCard";
import { WrenchIcon } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Home() {
  const { data: services } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Yes1</h1>
        <p className="text-xl text-muted-foreground">Thợ chuyên nghiệp</p>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <WrenchIcon className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Dịch vụ của chúng tôi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
