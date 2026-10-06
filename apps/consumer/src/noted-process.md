# MenuGET TODO

## 1. Scan → Table Session

- [x] Scan QR Code
- [ ] Create / Join Table Session
- [ ] หลัง Scan → ไปหน้า Table Group Room

> QR ทำหน้าที่สร้าง / เข้าร่วม Table Session

---

## 2. Table Group Room

- [ ] Table Group Room

### Table Room Header

- [ ] ชื่อร้าน
- [ ] หมายเลขโต๊ะ
- [ ] Session status
- [ ] รายชื่อคนในโต๊ะ
- [ ] Avatar / User status
- [ ] Online / Offline status
- [ ] ใครกำลังเลือกอาหาร
- [ ] ใครเลือกอาหารอะไรแล้ว
- [ ] จำนวนรายการอาหารของแต่ละคน
- [ ] จำนวนเงินของแต่ละคน
- [ ] ปุ่ม ดูเมนู
- [ ] ปุ่ม แชร์ห้อง
- [ ] ปุ่ม ออกจากโต๊ะ

---

## 3. Restaurant Menu

- [ ] Restaurant Menu
  - [ ] แสดงชื่อร้าน
  - [ ] Restaurant image
  - [ ] Category menu
  - [ ] Menu item
  - [ ] รูปอาหาร
  - [ ] ราคา
  - [ ] รายละเอียดอาหาร
  - [ ] ตัวเลือกอาหาร
  - [ ] เพิ่มจำนวน
  - [ ] ลดจำนวน
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

## 7. Staff / Manager Notification

### Customer

- [ ] Order submitted
- [ ] Order accepted
- [ ] Preparing
- [ ] Ready
- [ ] Cancelled

### Staff

- [ ] New order notification
- [ ] Table moved
- [ ] Order edited
- [ ] Wrong table
- [ ] Takeaway request
- [ ] Payment completed

### Manager

- [ ] New order
- [ ] Revenue notification
- [ ] Table status
- [ ] Staff correction
- [ ] Audit event

---

## 8. Staff Manual Correction ⭐

> ทุกการแก้ไขต้องมี API + เหตุผล + Audit Log

### Move Table

- [ ] เลือกโต๊ะใหม่
- [ ] Confirm
- [ ] ใส่เหตุผล
- [ ] ต้องการย้ายโต๊ะ
- [ ] Update Table Session
- [ ] Update UI Realtime
- [ ] Audit Log

### Wrong Table

- [ ] แจ้งว่า Scan ผิดโต๊ะ
- [ ] เลือกโต๊ะที่ถูกต้อง
- [ ] ใส่เหตุผล
- [ ] Move Session
- [ ] Audit Log

### Takeaway

- [ ] เปลี่ยนจาก Dine-in → Takeaway
- [ ] Confirm
- [ ] ใส่เหตุผล
- [ ] Update Order / Session
- [ ] Audit Log

### Edit Order

- [ ] เพิ่มรายการ
- [ ] ลบรายการ
- [ ] เปลี่ยนจำนวน
- [ ] แก้ Modifier
- [ ] ใส่เหตุผล
- [ ] Confirm
- [ ] Audit Log

---

## 9. Audit Log

> ทุก Mutation ต้องตรวจสอบย้อนหลังได้

- [ ] ผู้แก้ไข
- [ ] Action
- [ ] วันที่ / เวลา
- [ ] ข้อมูลเดิม
- [ ] ข้อมูลใหม่
- [ ] เหตุผล
- [ ] Order ID
- [ ] Table Session ID
- [ ] Staff / Manager ID

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
