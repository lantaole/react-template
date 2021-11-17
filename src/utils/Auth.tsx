import React, { useContext, createContext, useState } from 'react';

import type { loginParamsType, createContextType, requestType } from '@/utils/commonDataTypes'

const loginRequest = (params: loginParamsType): Promise<requestType> => {
  console.log('====================================');
  console.log('fakeRequest-params', params);
  console.log('====================================');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, code: 200, msg: '登录成功' })
    }, 100);
  })
}

const logoutRequest = (): Promise<requestType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, code: 200, msg: '退出成功' })
    }, 100);
  })
}

function useProvideAuth() {
  const [user, setUser] = useState<string | null>(null);

  const signin = async (params: loginParamsType): Promise<boolean> => {
    let result = false;
    const res = await loginRequest(params)
    if (res.code === 200) {
      const userName = 'user';
      setUser(userName);
      localStorage.setItem('token', userName)
      result = true;
    }
    return result;
  };

  const signout = async (): Promise<boolean> => {
    let result = false;
    const res = await logoutRequest()
    if (res.code === 200) {
      setUser(null);
      localStorage.clear();
      result = true;
    }
    return result;
  };

  return {
    user,
    signin,
    signout,
  };
}


const authContext = createContext<createContextType>({
  user: localStorage.getItem('token') ? 'user' : null,
  signin: () => {
    //
  },
  signout: () => {
    //
  },
});

interface ProvideAuthPropsType {
  children: React.ReactElement
}

export const ProvideAuth = (props: ProvideAuthPropsType) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{props.children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}
