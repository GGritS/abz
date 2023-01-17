export type Position = {
  id: number;
  name: string;
};

export type PositionResponse = {
  success: boolean;
  positions: Position[];
};

export type UsersResponse = {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: { next_url: string; prev_url: null };
  users: User[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
};
