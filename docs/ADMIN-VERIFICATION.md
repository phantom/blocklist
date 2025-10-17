# Xác nhận QUYỀN QUẢN TRỊ (ADMIN) — phantom/blocklist

Tôi xác nhận quyền quản trị (ADMIN) cho: phantom/blocklist repository  
Admin public key: 5SDrsMNTYdhmApjfqYHDvjoW92f2S42vcc7zNDVcQ9Ej  
Context: https://github.com/phantom/blocklist  
Timestamp (UTC): 2025-10-17T17:27:54Z  
Nonce: 0x7a3f1c9e5b2d4a1f

Signature (base58): <paste-signature-here>

---

Nội dung (exact message) cần ký — PHẢI KÝ NGUYÊN VĂN (bao gồm xuống dòng như dưới đây):
I confirm administrative control (ADMIN) for: phantom/blocklist repository
Admin public key: 5SDrsMNTYdhmApjfqYHDvjoW92f2S42vcc7zNDVcQ9Ej
Context: https://github.com/phantom/blocklist
Timestamp (UTC): 2025-10-17T17:27:54Z
Nonce: 0x7a3f1c9e5b2d4a1f

Hướng dẫn ký (tùy phương thức bạn dùng)
- Nếu dùng Phantom (trình duyệt):
  1. Mở một trang bạn tin tưởng, mở DevTools → Console.  
  2. Dán đoạn mã ký (mình cung cấp trong hướng dẫn) và chạy.  
  3. Khi popup Phantom hiện, kiểm tra message CHÍNH XÁC và Approve.  
  4. Sao chép signature_base58 và dán vào chỗ "Signature (base58)" trong file này.

- Nếu dùng file keypair + Node.js:
  1. Tạo file sign-admin.js (mình có thể gửi lại nếu cần).  
  2. Chạy:
     node sign-admin.js ./my-keypair.json "<exact message text above>"
  3. Lấy giá trị signature (base58) và dán vào chỗ "Signature (base58)" trong file này.

Cách verify (Node.js) — ví dụ nhanh
node verify-admin.js 5SDrsMNTYdhmApjfqYHDvjoW92f2S42vcc7zNDVcQ9Ej "<exact message text above>" <signature_base58>

Notes:
- PHẢI ký đúng "exact message" (không thêm/bớt ký tự hoặc thay đổi xuống dòng).  
- KHÔNG bao giờ đưa seed phrase hoặc file keypair lên GitHub hoặc chat.