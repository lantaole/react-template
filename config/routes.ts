import BlankLayout from "@/layouts/BlankLayout";
import UserLayout from "@/pages/user/UserLayout";
import BasicLayout from "@/layouts/BasicLayout";
import Login from "@/pages/user/Login";
import Register from "@/pages/user/Register";
import Home from "@/pages/home";
import ImgFontDemo from "@/pages/imgFontDemo";
import UserList from "@/pages/list/WorkList";
import WorkList from "@/pages/list/WorkList";


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
