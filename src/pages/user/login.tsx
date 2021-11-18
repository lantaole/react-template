import React from 'react';
import { useHistory } from 'react-router-dom'
import {
  useAuth
} from '@/utils/Auth'

const Layout: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();

  return <>
    <button onClick={async () => {
      const res = await auth.signin({ name: 'li', password: '123' })
      if (typeof res === 'boolean' && res) {
        history.push("/home")
      }
    }}>登录</button>
  </>;
};

export default Layout;
