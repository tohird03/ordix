// 12650 -> "12 650" (har qanday brauzerda bir xil ko'rinadi)
export const formatNumber = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// +998901234567 -> "+998 90 123 45 67"
export const formatPhone = (p: string) =>
  p.replace(/^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/, '+998 $1 $2 $3 $4');

// ISO sana -> "31.10.2026 14:05"
export const formatDateTime = (iso: string | null) => {
  if (!iso) return '—';
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
};

// Backend bilan bir xil qoida: 9 ta raqam yoki 998 bilan 12 ta raqam
export const isValidUzPhone = (raw: string) => {
  const d = raw.replace(/\D/g, '');
  return d.length === 9 || (d.length === 12 && d.startsWith('998'));
};
