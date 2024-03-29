import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import AuthContext from '../contexts/auth.context';
import { AuthInputType, AuthLoginRepType, AuthRegisterRepType } from '../types/auth.types';
import { RequestFailedResponseType } from '../types/clientApi.types';
import { UserType } from '../types/user.types';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function AuthProvider({ children }: Props) {
  const cookies = new Cookies();
  const router = useRouter();
  const token = cookies.get('token');

  const [user, setUser] = useState<UserType | null>(null);
  const [notification, setNotification] = useState<boolean>(false);

  async function Login(
    infos: Pick<AuthInputType, 'email' | 'password'>
  ): Promise<RequestFailedResponseType | AuthLoginRepType> {
    try {
      const rep = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/auth/signin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infos),
      });
      const data: AuthLoginRepType = await rep.json();
      return data;
    } catch (error) {
      //TODO: type error with RequestFailedResponseType
      return {
        statusCode: 400,
        error: 'Bad Request',
        message: 'UserPasswordError',
      };
    }
  }

  async function Register(
    infos: Omit<AuthInputType, 'confirmPassword'>
  ): Promise<RequestFailedResponseType | AuthRegisterRepType> {
    try {
      const rep = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/auth/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infos),
      });
      const data: AuthRegisterRepType = await rep.json();
      return data;
    } catch (error) {
      //TODO: type error with RequestFailedResponseType
      return {
        statusCode: 400,
        error: 'Bad Request',
        message: 'EmailAlreadyExisteError',
      };
    }
  }

  function Logout() {
    // TODO: add logout logic
    cookies.remove('token');
    setUser(null);
  }

  const setNotificationHandler = (type: boolean) => {
    setNotification(type);
  };

  async function GetCurrentUser(): Promise<RequestFailedResponseType | UserType> {
    try {
      const rep = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/user`, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = rep.json();
      return data;
    } catch (error) {
      console.log(`error: ${error}`);
      //TODO: type error with RequestFailedResponseType
      return {
        statusCode: 400,
        error: 'Bad Request',
        message: 'UserNotFoundError',
      };
    }
  }

  useEffect(() => {
    if (!token && router.pathname !== '/auth/signin' && router.pathname !== '/auth/signup') {
      router.push('/');
    }
  }, [token]);

  const value = useMemo(
    () => ({
      signed: Boolean(user),
      notification: notification,
      user,
      setNotificationHandler,
      Login,
      Register,
      Logout,
      GetCurrentUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
