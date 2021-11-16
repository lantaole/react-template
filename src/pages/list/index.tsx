import React from "react";
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom";


import UserList from '@/pages/list/UserList'
import WorkList from '@/pages/list/WorkList'


const Index: React.FC = () => {
  return (
    <Routes>
      <Route  path="/home/list">
        <Route path='/home/list/UserList' element={<UserList/>}>跳转</Route>
      </Route>
      <Route
        path="/home/list/UserList"
        element={<UserList/>}
      />
      <Route
        path="/home/list/WorkList"
        element={<WorkList/>}
      />
    </Routes>
  );
};

export default Index;
