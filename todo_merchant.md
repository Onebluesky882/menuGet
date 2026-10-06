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
