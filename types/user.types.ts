//
// User types
// ===== ===== ===== ===== =====
export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  admin: boolean;
};

export type UserPosition = {
  latitude: number;
  longitude: number;
};
