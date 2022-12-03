import { createContext } from 'react';
import { AuthInputType, AuthLoginRepType, AuthRegisterRepType } from '../types/auth.types';
import { RequestFailedResponseType } from '../types/clientApi.types';
import { UserType } from '../types/user.types';

interface AuthContextData {
  signed: boolean;
  user: UserType | null;
  Login(infos: Pick<AuthInputType, 'email' | 'password'>): Promise<RequestFailedResponseType | AuthLoginRepType>;
  Register(infos: Omit<AuthInputType, 'confirmPassword'>): Promise<RequestFailedResponseType | AuthRegisterRepType>;
  Logout(): void;
  GetCurrentUser(): Promise<RequestFailedResponseType | UserType>;
}

const AuthContext = createContext<AuthContextData | null>(null);

export default AuthContext;
