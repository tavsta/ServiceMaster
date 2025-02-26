import { PageHeader } from "../components/page-header";
import { PageTitle } from "../components/page-title";

export default function WarrantyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader>
        <PageTitle>Chính sách bảo hành</PageTitle>
      </PageHeader>
      
      <div className="prose max-w-none">
        <h2>1. Phạm vi bảo hành</h2>
        <p>
          Care247 cam kết cung cấp dịch vụ chăm sóc sức khỏe chất lượng cao. Chính sách bảo hành của chúng tôi áp dụng cho tất cả các dịch vụ được cung cấp bởi đội ngũ nhân viên y tế của Care247.
        </p>

        <h2>2. Thời gian bảo hành</h2>
        <p>
          Thời gian bảo hành cho các dịch vụ của chúng tôi là 7 ngày kể từ ngày cung cấp dịch vụ. Trong thời gian này, nếu bạn không hài lòng với dịch vụ đã nhận, chúng tôi sẽ cung cấp dịch vụ khắc phục miễn phí.
        </p>

        <h2>3. Điều kiện bảo hành</h2>
        <p>
          Bảo hành chỉ có hiệu lực khi:
        </p>
        <ul>
          <li>Dịch vụ được cung cấp bởi nhân viên chính thức của Care247</li>
          <li>Khách hàng tuân thủ đầy đủ hướng dẫn và khuyến cáo của nhân viên y tế</li>
          <li>Khiếu nại được gửi trong thời gian bảo hành</li>
        </ul>

        <h2>4. Quy trình bảo hành</h2>
        <p>
          Để yêu cầu bảo hành, vui lòng liên hệ với chúng tôi qua:
        </p>
        <ul>
          <li>Tổng đài: 1900 xxxx (8:00 - 22:00 hàng ngày)</li>
          <li>Email: warranty@care247.vn</li>
          <li>Ứng dụng Care247: Mục "Hỗ trợ" &gt; "Yêu cầu bảo hành"</li>
        </ul>

        <h2>5. Dịch vụ khắc phục</h2>
        <p>
          Tùy thuộc vào tình trạng và đánh giá của chúng tôi, dịch vụ khắc phục có thể bao gồm:
        </p>
        <ul>
          <li>Cung cấp lại dịch vụ miễn phí</li>
          <li>Hoàn tiền một phần hoặc toàn bộ</li>
          <li>Đền bù hợp lý cho các thiệt hại phát sinh (nếu có)</li>
        </ul>

        <h2>6. Trường hợp không được bảo hành</h2>
        <p>
          Chính sách bảo hành không áp dụng trong các trường hợp sau:
        </p>
        <ul>
          <li>Khách hàng không tuân thủ hướng dẫn của nhân viên y tế</li>
          <li>Vấn đề phát sinh do điều kiện sức khỏe có sẵn mà khách hàng không thông báo trước</li>
          <li>Tác dụng phụ thông thường đã được thông báo trước</li>
          <li>Yêu cầu bảo hành sau thời hạn quy định</li>
        </ul>

        <h2>7. Cam kết chất lượng</h2>
        <p>
          Care247 cam kết không ngừng nâng cao chất lượng dịch vụ. Mọi phản hồi của khách hàng đều được ghi nhận và xử lý nghiêm túc để cải thiện trải nghiệm người dùng.
        </p>

        <h2>8. Liên hệ hỗ trợ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo hành này, vui lòng liên hệ với bộ phận Chăm sóc Khách hàng của chúng tôi qua số điện thoại: 1900 xxxx hoặc email: support@care247.vn.
        </p>
      </div>
    </div>
  );
}