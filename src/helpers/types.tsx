// ─── Types ────────────────────────────────────────────────────────────────────

interface ActivityOption {
  id: string;
  activityId: string;
  value: string;
}
export interface Activity {
  id: string;
  title: string;
  category: string;
  area: string;
  durationMinutes: number;
  priceLevel: number; // 1–4
  rating: number;
  imageUrl: string;
  description: string;
  tags: ActivityOption[];
}