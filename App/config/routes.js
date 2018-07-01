import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Homepage from '../layouts/Homepage/Index';
import Category from '../layouts/Category/Index';
import Login from '../layouts/Account/Login';
import Dashboard from '../layouts/Account/Dashboard';
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="homepage" component={Homepage} title="Trang chủ" hideNavBar={true}  initial={true} type={ActionConst.REPLACE}/>
        <Scene key="category" component={Category} title="Chuyên mục" hideNavBar={true}  type={ActionConst.REPLACE}/>
        <Scene key="login" component={Login} title="Đăng nhập" hideNavBar={true}  type={ActionConst.REPLACE}/>
        <Scene key="dashboard" component={Dashboard} title="dashboard" hideNavBar={true}  type={ActionConst.REPLACE}/>
    </Scene>
);
export default () => (
    <Router scenes={scenes} />
);