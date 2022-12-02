//
// Auth Input types
// ===== ===== ===== ===== =====
export type AuthInputType = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

//
// Auth Login rep types
// ===== ===== ===== ===== =====
export type AuthLoginRepType = {
  message: string;
};

//
// Auth Register rep types
// ===== ===== ===== ===== =====
export type AuthRegisterRepType = {
  message: boolean;
};
