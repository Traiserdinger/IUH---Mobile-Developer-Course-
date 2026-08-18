# 📱 SmartCampus - React Native
**Bài Thực Hành Chương 2: Core Primitives & Interaction**

---

## 👨‍🎓 Thông Tin Sinh Viên
- 👤 **Họ và tên:** Nguyễn Đức Trung
- 🆔 **Mã SV:** 23687791
- 🏫 **Lớp:** DHDTMT18A

---

## 🛠️ Các Component Đã Sử Dụng

🔹 **Core Primitives:** `View`, `Text`, `Image`, `TextInput`, `ScrollView`.

🔹 **Custom Components:**
- 🏷️ **`Header.tsx`**: Thanh tiêu đề của ứng dụng.
- 🖼️ **`StudentInfo.tsx`**: Khung chứa thông tin và ảnh đại diện. Có sử dụng `Pressable` mở rộng vùng chạm bằng `hitSlop` và hiệu ứng mờ đi (`opacity`) khi nhấn.
- 🖱️ **`CustomButton.tsx`**: Nút "LƯU HỒ SƠ" xử lý 3 trạng thái: Bình thường (xanh), Đang nhấn (xanh đậm + hiệu ứng lún xuống), Vô hiệu hóa (xám).

🔹 **Trợ năng (Accessibility):** Các vùng chạm đều được khai báo đầy đủ `accessibilityRole`, `accessibilityLabel`, `accessibilityHint` và `accessibilityState`.

---

## 🚀 Hướng Dẫn Chạy Ứng Dụng

**Bước 1:** Mở Terminal tại thư mục chứa dự án và cài đặt các thư viện cần thiết:
```bash
npm install
```

**Bước 2:** Khởi động server Expo:
```bash
npx expo start
```

**Bước 3:** Trải nghiệm ứng dụng:
- 🌐 Nhấn phím `w` trên Terminal để mở nhanh bằng trình duyệt Web giả lập.
- 📱 Hoặc mở ứng dụng **Expo Go** trên điện thoại để quét mã QR.
