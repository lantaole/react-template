import BlankLayout from "@/pages/layouts/BlankLayout";
import UserLayout from "@/pages/user/UserLayout";
import BasicLayout from "@/pages/layouts/BasicLayout";
import Login from "@/pages/user/Login";
import Register from "@/pages/user/Register";
import Home from "@/pages/home/Home";
import ImgFontDemo from "@/pages/home/imgFontDemo";
import UserList from "@/pages/home/list/UserList";
import WorkList from "@/pages/home/list/WorkList";


export default [
  {
    path: '/',
    component: BlankLayout,
    routes: [
      {
        path: '/user',
        component: UserLayout,
        routes: [
          {
            path: '/user/login',
            component: Login,
          },
          {
            path: '/user/register',
            component: Register,
          }
        ]
      },
      {
        path: '/home',
        component: BasicLayout,
        routes: [
          {
            path: '/home/index',
            name: '首页',
            component: Home
          },
          {
            path: '/home/imgFontDemo',
            name: 'imgFontDemo',
            component: ImgFontDemo
          },
          {
            path: '/home/list',
            name: 'list',
            component: BlankLayout,
            routes: [
              {
                path: '/home/list/UserList',
                name: 'UserList',
                component: UserList,
              },
              {
                path: '/home/list/WorkList',
                name: 'WorkList',
                component: WorkList,
              },
            ]
          }
        ]
      }
    ]
  }
]
