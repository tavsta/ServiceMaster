
import { PageHeader } from "../components/page-header";
import { PageTitle } from "../components/page-title";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader>
        <PageTitle>Điều khoản sử dụng</PageTitle>
      </PageHeader>
      
      <div className="prose max-w-none">
        <h2>1. Giới thiệu</h2>
        <p>
          Chào mừng bạn đến với Care247. Bằng việc truy cập và sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện được nêu dưới đây.
        </p>

        <h2>2. Đăng ký tài khoản</h2>
        <p>
          Khi đăng ký sử dụng dịch vụ của chúng tôi, bạn cam kết cung cấp thông tin chính xác, đầy đủ và cập nhật. Việc không cung cấp thông tin chính xác có thể dẫn đến việc đình chỉ hoặc chấm dứt tài khoản của bạn.
        </p>

        <h2>3. Trách nhiệm người dùng</h2>
        <p>
          Bạn chịu trách nhiệm về việc duy trì tính bảo mật của tài khoản và mật khẩu của mình. Bạn đồng ý chịu trách nhiệm về tất cả các hoạt động diễn ra dưới tài khoản của mình.
        </p>

        <h2>4. Dịch vụ và thanh toán</h2>
        <p>
          Care247 cung cấp dịch vụ chăm sóc sức khỏe tại nhà. Chi phí và cách thức thanh toán sẽ được thông báo rõ ràng trước khi bạn sử dụng dịch vụ. Chúng tôi có quyền thay đổi giá cả sau khi thông báo hợp lý.
        </p>

        <h2>5. Hủy dịch vụ</h2>
        <p>
          Bạn có thể hủy dịch vụ đã đặt theo chính sách hủy của chúng tôi. Việc hủy dịch vụ quá thời hạn quy định có thể dẫn đến phí hủy dịch vụ.
        </p>

        <h2>6. Bảo mật thông tin</h2>
        <p>
          Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Thông tin của bạn sẽ được sử dụng theo Chính sách Bảo mật của chúng tôi.
        </p>

        <h2>7. Thay đổi điều khoản</h2>
        <p>
          Care247 có quyền thay đổi các điều khoản này vào bất kỳ lúc nào. Chúng tôi sẽ thông báo cho bạn về những thay đổi quan trọng qua email hoặc thông báo trên trang web của chúng tôi.
        </p>

        <h2>8. Liên hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về Điều khoản Sử dụng này, vui lòng liên hệ với chúng tôi qua email: support@care247.vn hoặc gọi số điện thoại: 1900 xxxx.
        </p>
      </div>
    </div>
  );
}