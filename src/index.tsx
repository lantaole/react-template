import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate, } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';

import NoMatch from './pages/404';

import routes from '../config/routes'
import {
  ProvideAuth,
  useAuth
} from '@/utils/Auth'

import type { menuType } from '@/utils/commonDataTypes'

import './app.less';

let navigate = useNavigate();


// 封装 Route以便用于权限校验
function PrivateRoute({ children, ...rest }) {
  // 获取用户权限以验证当前路径是否可以访问
  const auth = useAuth();

  return (
    <Route
      {...rest}
      /* 如果没有权限或当前路径是user则通过权限校验，否则跳转到登录界面 */
      render={({ location }) =>
        auth.user || location.pathname.includes('user') ? (
          children
        ) : (
          navigate('/user/login')
        // state: { from: location }

        )
      }
    />
  );
}

const RouteWithSubRoutes = (routeDatas: menuType[]) => {

  if (Array.isArray(routeDatas) && routeDatas.length > 0) {
    return routeDatas.map((item) => {
      const bool = Array.isArray(item.routes) && item.routes.length > 0
      if (bool) {

        return <Route
          key={item.path}
          path={item.path}
          render={props => Array.isArray(item.routes) && item.routes.length > 0 ? (
            // item.component 是 BasicLayout，UserLayout，BlankLayout其中一个布局
            <item.component {...props}>
              <Routes>
                <PrivateRoute exact path={item.path}>
                  <Redirect to={item.routes[0].path} />
                </PrivateRoute>
                {RouteWithSubRoutes(item.routes)}
                <Route path="*">
                  <NoMatch />
                </Route>
              </Routes>
            </item.component>
          ) : (
            <Redirect
              to={{
                pathname: "/user/login",
                state: { from: props.location }
              }}
            />
          )}
        />

      }
      //  使用 PrivateRoute组件替换 Route组件
      return <PrivateRoute path={item.path} key={item.path}>
        <item.component />
      </PrivateRoute>
    })
  }
  return null
}


function Index() {
  return (
    <ProvideAuth>
      <Router>
        <Routes>
          {RouteWithSubRoutes(routes)}
        </Routes>
      </Router>
    </ProvideAuth>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Index />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
