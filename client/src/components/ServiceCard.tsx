import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Service } from "@shared/schema";
import { Clock, Wrench, CheckCircle } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-primary" />
          {service.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{service.description}</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Phục vụ 24/7</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Bảo hành dài hạn</span>
          </li>
        </ul>
        <Link href="/book">
          <Button className="w-full">Đặt dịch vụ ngay</Button>
        </Link>
      </CardContent>
    </Card>
  );
}