import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import { Icon, Menu } from 'antd';


import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard/index';
import Wiki from '../pages/Wiki/index';

export default function Routes() {

    const [isCollapsed, setIsCollapsed] = useState({state: true});
    const [ activeKey, setActiveKey ] = useState("1");

    return (

        <div style={{display: 'flex'}}>

            <BrowserRouter>

                <div style={{width: 'auto'}}>

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        inlineCollapsed={isCollapsed.state}
                        activeKey={activeKey}
                        style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', height: '100vh', borderRadius: '0 30px 30px 0'}}
                    >

                        <Menu.Item key="0" title="LeanRedmine Logo" >
                            <Icon type="chrome"  theme="filled" style={{color: "#FF4D4F", fontSize: '20px'}} />
                            <span>LeanRedmine</span>
                        </Menu.Item>

                        <Menu.Item key="1" title="Painel de controle" onClick={() => {setActiveKey("1")}}>
                            <Icon type="dashboard" style={{fontSize: '20px'}} />
                            <span><Link exact to="/">Painel de controle</Link></span>
                        </Menu.Item>

                        <Menu.Item key="2" title="Wiki" onClick={() => {setActiveKey("2")}}>
                            <Icon type="database" style={{fontSize: '20px'}} />
                            <span><Link to="/wiki">Wiki</Link></span>
                        </Menu.Item >

                        <Menu.Item key="99" title="Minimizar/maximizar" onClick={() => setIsCollapsed({state: !isCollapsed.state})}>
                            <Icon type={isCollapsed.state ? 'menu-unfold' : 'menu-fold'} style={{fontSize: '20px'}} />
                            <span>Minimizar</span>
                        </Menu.Item >

                    </Menu>

                </div>

                <Switch>

                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute path="/wiki" component={Wiki} />

                </Switch>

            </BrowserRouter>

        </div>
    );
}
