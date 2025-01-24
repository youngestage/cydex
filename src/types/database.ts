export interface CarbonImpact {
  id: string;
  user_id: string | null;
  co2_saved: number;
  delivery_count: number;
  created_at: string;
  updated_at: string;
}

export interface MonthlyCarbonSaving {
  id: string;
  user_id: string | null;
  month: string;
  savings: number;
  created_at: string;
}