import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Navbar() {
  const [location, navigate] = useLocation();
  const { toast } = useToast();

  const { data: user } = useQuery({
    queryKey: ["/api/auth/me"],
    retry: false,
  });

  const handleLogout = async () => {
    try {
      await apiRequest("POST", "/api/auth/logout");
      navigate("/");
      toast({
        title: "Đăng xuất thành công",
      });
    } catch (error) {
      toast({
        title: "Đăng xuất thất bại",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src="https://admin.yes1.vn/favicon.png" alt="Yes1" className="h-8 w-8" />
            <span className="font-bold text-2xl text-primary">Yes1</span>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/book">
                <Button variant="ghost">Đặt dịch vụ</Button>
              </Link>
              <Button onClick={handleLogout} variant="outline">
                Đăng xuất
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button>Đăng nhập</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}