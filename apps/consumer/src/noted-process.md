# MenuGET TODO

## 1. Scan → Table Session

- [x] Scan QR Code
- [x] Create / Join Table Session
- [x] หลัง Scan → ไปหน้า Table Group Room

> QR ทำหน้าที่สร้าง / เข้าร่วม Table Session

---

## 2. Table Group Room

- [x] Table Group Room

### Table Room Header

- [x] ชื่อร้าน
- [x] หมายเลขโต๊ะ
- [x] Session status
- [x] รายชื่อคนในโต๊ะ
- [ ] Avatar / User status
- [ ] Online / Offline status
- [ ] ใครกำลังเลือกอาหาร
- [ ] ใครเลือกอาหารอะไรแล้ว
- [ ] จำนวนรายการอาหารของแต่ละคน
- [x] ปุ่ม ดูเมนู
- [ ] ปุ่ม แชร์ห้อง
- [ ] ปุ่ม ออกจากโต๊ะ
- [ ] old room new session
- [ ] search name Room

---

## 3. Restaurant Menu

- [X] Restaurant Menu
  - [X] แสดงชื่อร้าน
  - [ ] Restaurant image
  - [ ] Category menu
  - [X] Menu item
  - [X] รูปอาหาร
  - [X] ราคา
  - [X] รายละเอียดอาหาร
  - [ ] ตัวเลือกอาหาร
  - [X] เพิ่มจำนวน
  - [X] ลดจำนวน
  - [ ] เพิ่มลงตะกร้า
  - [ ] Cart badge
  - [ ] Search menu
  - [ ] Filter category

---

## 4. Live Group Ordering

- [ ] เห็นคนอื่นกำลังเลือกอะไร
- [ ] เห็นรายการที่คนอื่นเลือก
- [ ] เห็นจำนวน
- [ ] เห็นชื่อคนสั่ง
- [ ] Update แบบ Realtime
- [ ] แจ้งเมื่อมีคนเพิ่มอาหาร
- [ ] แจ้งเมื่อมีคนแก้ไขอาหาร

---

## 5. Cart / เตรียมสั่ง

- [ ] Cart / เตรียมสั่ง
  - [ ] รายการอาหารของฉัน
  - [ ] รายการอาหารของคนอื่น
  - [ ] รวมรายการทั้งโต๊ะ
  - [ ] แก้จำนวน
  - [ ] ลบรายการ
  - [ ] หมายเหตุอาหาร
  - [ ] สรุปราคา
  - [ ] Service charge
  - [ ] VAT
  - [ ] ยอดรวม
  - [ ] ปุ่ม ยืนยันรายการ

---

## 6. Confirm Order

- [ ] Confirm Order

### Review Order

- [ ] แสดงรายการทั้งหมด
- [ ] แสดงคนสั่ง
- [ ] แสดงราคา
- [ ] Confirm dialog
- [ ] Loading
- [ ] Success
- [ ] Error
- [ ] Retry
- [ ] Order number
- [ ] Order status

### API

- [ ] POST /orders
- [ ] Mock response

### Print

- [ ] Mock print
- [ ] Print immediately after Confirm
- [ ] Print success
- [ ] Print failed
- [ ] Retry print

### Print Rules

- [ ] 1 Confirm = 1 Order
- [ ] Print only items from the current Order
- [ ] Do not print all orders from the table
- [ ] Group items by category / station
  - [ ] Food → Food Printer
  - [ ] Beverage → Beverage Printer
  - [ ] Dessert → Dessert Printer
- [ ] 1 Print Job per group
- [ ] If a group has no items, do not print
- [ ] Keep Order as one Order for payment / history / tracking

---

## 10. Share Deep Link

- [ ] Share Deep Link
- [ ] ปุ่ม แชร์ห้อง
- [ ] Generate Deep Link
- [ ] Share Sheet
- [ ] Copy Link
- [ ] QR Code สำหรับ Join
- [ ] เปิด Link จากมือถือเครื่องอื่น
- [ ] เข้า Table Session
- [ ] ถ้า Session หมดอายุ → Error
- [ ] ถ้า Session ปิดแล้ว → Error

---

## 11. Payment

- [ ] รวมจ่าย
- [ ] แยกจ่าย
- [ ] แบ่งจ่ายตามรายการอาหาร
- [ ] แบ่งจ่ายเป็น %
- [ ] หัวหน้าออก 50%
- [ ] ที่เหลือแชร์กัน
- [ ] ตรวจสอบ % รวม = 100%
- [ ] Payment status
- [ ] Payment completed
- [ ] Payment failed
- [ ] Payment history

---

## 12. QR Code Generator

- [ ] Create QR Code Widget
- [ ] เลือกร้าน
- [ ] เลือกโต๊ะ
- [ ] Generate QR Code
- [ ] Preview QR Code
- [ ] Download / Save
- [ ] Print QR Code
- [ ] QR สำหรับ Table Session
