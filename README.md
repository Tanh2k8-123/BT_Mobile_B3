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

## Chạy ứng dụng

```bash
npm install
npm run android
```

Để mở trên trình duyệt thay cho Android:

```bash
npm run web
```
