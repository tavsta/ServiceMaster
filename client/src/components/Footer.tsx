import { Link } from "wouter";
import { PhoneCall, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Care247</h3>
            <p className="text-gray-600">
              Dịch vụ chăm sóc sức khỏe tại nhà chuyên nghiệp, an toàn và tiện lợi.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/book">
                  <a className="text-gray-600 hover:text-primary">Đặt lịch</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 hover:text-primary">Liên hệ</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Thông tin pháp lý</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service">
                  <a className="text-gray-600 hover:text-primary">Điều khoản sử dụng</a>
                </Link>
              </li>
              <li>
                <Link href="/warranty-policy">
                  <a className="text-gray-600 hover:text-primary">Chính sách bảo hành</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-gray-600 hover:text-primary">Chính sách bảo mật</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Care247. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
