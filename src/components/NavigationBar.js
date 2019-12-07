import React, { useState, useEffect } from 'react';
import { Icon, Menu } from 'antd';
import { useNav } from "../config/navigation/navigation";

export default function NavigationBar() {

    const [isCollapsed, setIsCollapsed] = useState({state: true});
    
    const { navbarActiveKey, setNavbarActiveKey } = useNav();

    useEffect(() => {

        console.log(navbarActiveKey);

    }, [navbarActiveKey]);

    return (

            <div style={{width: '256px'}}>
                <Menu
                    mode="vertical"
                    defaultSelectedKeys={["1"]}
                    inlineCollapsed={isCollapsed.state}
                    activeKey={navbarActiveKey}
                    style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', height: '100vh'}}
                >
                    <Menu.Item key="0" title="LeanRedmine Logo" >
                        <Icon type="chrome"  theme="filled" style={{color: "#FF4D4F"}} />
                        <span>LeanRedmine</span>
                    </Menu.Item>
                    <Menu.Item key="1" title="Painel de controle" onClick={() => {setNavbarActiveKey("1")}}>
                        <Icon type="dashboard" />
                        <span>Painel de controle</span>
                    </Menu.Item>
                    <Menu.Item key="2" title="Wiki" onClick={() => {setNavbarActiveKey("2")}}>
                        <Icon type="database" />
                        <span>Wiki</span>
                    </Menu.Item >
                    <Menu.Item key="99" title="Minimizar/maximizar" onClick={() => setIsCollapsed({state: !isCollapsed.state})} style={{}}>
                        <Icon type={isCollapsed.state ? 'menu-unfold' : 'menu-fold'} />
                        <span>Minimizar</span>
                    </Menu.Item >
                </Menu>
            </div>
    )

}
