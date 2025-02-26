import { Link } from "wouter";
import { PhoneCall, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Về Yes1</h3>
            <p className="text-muted-foreground">
              Chúng tôi cung cấp dịch vụ sửa chữa điện máy chuyên nghiệp, 
              uy tín với đội ngũ kỹ thuật viên nhiều năm kinh nghiệm.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-primary" />
                <a href="tel:0389167693" className="hover:text-primary">0389167693</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@yes1.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-primary" />
                <a href="https://facebook.com/yes1" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Chính sách</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="hover:text-primary">Chính sách bảo mật</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="hover:text-primary">Điều khoản sử dụng</a>
                </Link>
              </li>
              <li>
                <Link href="/warranty">
                  <a className="hover:text-primary">Chính sách bảo hành</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Yes1. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
