# ORDIX: ishga tushirish

Ikkita papka bor: `back` (NestJS + Prisma + PostgreSQL) va `web` (React + Ant Design).
Node.js 22+ va pnpm kerak. Bu loyiha o'zining alohida bazasidan foydalanadi, mavjud bazangizga tegmaydi.

## 1. Bazani yarating (bir marta)
pgAdmin da yangi baza yarating: nomi `ordix` (yoki `psql -U postgres -c "CREATE DATABASE ordix;"`).

## 2. Backend
```powershell
cd back
Copy-Item .env.example .env        # keyin .env ichida PAROL ni o'zingiznikiga almashtiring
pnpm install
pnpm db:generate                    # Prisma klientini yaratadi
pnpm db:deploy                      # jadvallarni yaratadi (Currency, Customer)
pnpm start:dev                      # http://localhost:3000
```
Tekshirish: brauzerda `http://localhost:3000/currencies` ochilsa, `UZS` (so'm) ko'rinadi.

## 3. Frontend (yangi terminalda)
```powershell
cd web
Copy-Item .env.example .env
pnpm install
pnpm dev                            # http://localhost:5173
```
Keyin: chap paneldagi "Mijozlar" va "Sozlamalar > Valyutalar".

## Xatolik bo'lsa
- `pnpm db:deploy` xato bersa, `.env` dagi parol va baza nomini tekshiring.
- "Serverga ulanib bo'lmadi" yozuvi chiqsa, backend ishlab turganini tekshiring.
