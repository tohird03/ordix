import { isAxiosError } from 'axios';

// Backenddan kelgan xatoni foydalanuvchiga ko'rsatish uchun matnga aylantiradi
export function getErrorMessage(e: unknown): string {
  if (isAxiosError(e)) {
    if (!e.response) return "Serverga ulanib bo'lmadi. Backend ishlayotganini tekshiring.";
    const message = e.response.data?.message;
    if (Array.isArray(message)) return message.join('. ');
    if (typeof message === 'string') return message;
  }
  return 'Kutilmagan xatolik yuz berdi';
}
