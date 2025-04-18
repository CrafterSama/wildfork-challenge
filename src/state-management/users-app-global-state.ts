'use client';

import { ADMIN_USER } from '@/constants/common';
import { AuthUser } from '@/types/common';
import { User } from '@/types/users';
import { removeSessionFromCookies, saveSessionToCookies } from '@/utils/auth-cookie';
import { create, useStore } from 'zustand';

type appStoreProps = {
  adminUser: {
    name: string;
    email: string;
  };
  auth: {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
  };
  users: User[];
  setUsers: (users: appStoreProps['users']) => void;
  addUser: (user: appStoreProps['users'][0]) => void;
  deleteUser: (id: number) => void;
};

const appStore = create<appStoreProps>(set => ({
  adminUser: ADMIN_USER,
  auth: {
    isAuthenticated: false,
    login: (email: string, password: string) => {
      const user: AuthUser = {
        name: ADMIN_USER.name,
        email: ADMIN_USER.email,
      };
      saveSessionToCookies({ user, isAuthenticated: true });
      set(state => ({
        auth: {
          ...state.auth,
          isAuthenticated: true,
        },
      }));
    },
    logout: () => {
      removeSessionFromCookies();
      set(state => ({
        auth: {
          ...state.auth,
          isAuthenticated: false,
        },
      }));
    },
  },
  users: [],
  setUsers: (users: appStoreProps['users']) => {
    set(state => ({
      users,
    }));
  },
  addUser: (user: appStoreProps['users'][0]) => {
    set(state => ({
      users: [...state.users, user],
    }));
  },
  deleteUser: (id: number) => {
    set(state => ({
      users: state.users.filter(user => user.id !== id),
    }));
  },
}));

const useAppStoreContext = () => useStore(appStore);

export default useAppStoreContext;
