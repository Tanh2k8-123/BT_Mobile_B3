# BT_Mobile_B3

## Bài tập buổi 3 — React Native

Ứng dụng Expo có hai màn hình, điều hướng bằng React Navigation native stack:

- **Screen 1:** bố cục sáu ô màu, nhập UserName và MSSV; nhấn **Click me** để mở Screen 2.
- **Screen 2:** hiển thị tên và MSSV đã nhập; nhấn nút **Back** màu cam ở góc trên trái để quay lại.
- Hai trường bắt buộc nhập. Nếu còn trống, ứng dụng hiện hộp thoại cảnh báo và không chuyển màn hình.

## Cấu trúc thư mục

```text
src/
  components/   # Button, form field, color tiles
  navigation/   # Typed native stack
  screens/      # Screen 1 và Screen 2
  theme/        # Màu giao diện
  types/        # Kiểu dữ liệu và route params
```

Xem hướng dẫn giải thích từng file tại [HUONG_DAN_GIAI_THICH_CODE.md](HUONG_DAN_GIAI_THICH_CODE.md).

## Chạy ứng dụng

```bash
npm install
npm run android
```

Để mở trên trình duyệt thay cho Android:

```bash
npm run web
```

## Kiểm tra MSSV và video demo

MSSV hợp lệ gồm chữ B, tiếp theo là 2 chữ cái, 2 chữ số từ 22 đến 26, rồi 4 chữ số. Chữ thường được tự chuyển thành chữ hoa; ví dụ BIT240015.

- [Video demo kiểm tra mã sinh viên](videos/demo-validation-mssv.mp4)
- [Video demo Buổi 3](<videos/video demo.mp4>)
