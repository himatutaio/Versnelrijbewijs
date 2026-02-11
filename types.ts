
export interface Instructor {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  zip_code: string; // New field for regional matching
  status: 'Vol' | 'Beschikbaar';
  manager: string; // e.g., Mariam or Khalid
  rating: number;
  reviews: number;
  image_url: string;
}

export interface Booking {
  id: string;
  instructor_id: string;
  student_name: string;
  student_email: string;
  zip_code: string;
  time_slot: string;
  status: 'pending' | 'confirmed';
}

export interface Package {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  lessons: number;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  created_at: string;
}
