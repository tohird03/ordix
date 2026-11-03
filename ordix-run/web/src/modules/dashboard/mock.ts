// Vaqtinchalik ma'lumot. API ulanganda shu fayl o'chiriladi.
export type ActivityType = 'sale' | 'purchase' | 'return';

export interface Activity {
  id: string;
  type: ActivityType;
  action: string;
  amount: string;
  status: 'done' | 'pending';
  date: string;
}

export const totals: Record<string, string> = { UZS: '248 560 000', USD: '19 340' };

export const wallets = [
  { code: 'UZS', amount: '248 560 000', active: true },
  { code: 'USD', amount: '19 340', active: true },
  { code: 'EUR', amount: '7 215', active: false },
];

export const stats = [
  { title: 'Bugungi sotuv', value: '12 480 000', change: 7, hot: true },
  { title: 'Jami kirim', value: '7 250 000', change: -5 },
  { title: 'Sof foyda', value: '3 120 000', change: 8 },
  { title: 'Qaytarish', value: '640 000', change: 2 },
];

export const income = [
  { month: 'Mar', profit: 38, loss: 30 },
  { month: 'Apr', profit: 52, loss: 28 },
  { month: 'May', profit: 30, loss: 26 },
  { month: 'Iyn', profit: 44, loss: 34 },
  { month: 'Iyl', profit: 22, loss: 30 },
  { month: 'Avg', profit: 18, loss: 36 },
  { month: 'Sen', profit: 12, loss: 28 },
  { month: 'Okt', profit: 8, loss: 20 },
];

export const limit = { spent: '18 400 000', max: '30 000 000', percent: 61 };

export const activities: Activity[] = [
  { id: 'SAL-000076', type: 'sale', action: 'Sotuv — Baraka Savdo', amount: '5 000 000 UZS', status: 'done', date: '31 Okt 2026, 14:05' },
  { id: 'PUR-000031', type: 'purchase', action: 'Kirim — Global Trade', amount: '2 400 USD', status: 'done', date: '31 Okt 2026, 11:20' },
  { id: 'SAL-000075', type: 'sale', action: 'Sotuv — Nodira Kosmetika', amount: '1 250 000 UZS', status: 'pending', date: '30 Okt 2026, 17:45' },
  { id: 'RET-000008', type: 'return', action: 'Qaytarish — Anvar Elektronika', amount: '300 USD', status: 'done', date: '30 Okt 2026, 15:10' },
];
