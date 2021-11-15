import type React from 'react';

export type menuType = {
  path: string;
  component: React.FC;
  name?: string;
  routes?: menuType[];
};

// ----------请求响应类型
export interface requestType {
  success: boolean;
  code: number;
  msg: string;
}

// --------------------登录鉴权相关参数类型-------------------
export interface loginParamsType {
  name: string;
  password: string;
}

type signinType = (cb?: any) => void;
type signoutType = (cb?: any) => void;

export interface createContextType {
  user: string | null;
  signin: signinType;
  signout: signoutType;
}
