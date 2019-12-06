import React, { useState } from 'react';
import { Button, Icon, Menu } from 'antd';

export default function Dashboard() {

    const [isCollapsed, setIsCollapsed] = useState({state: true});

    return (

        <>
            <div style={{width: '256px'}}>
                <Menu
                    mode="vertical"
                    defaultSelectedKeys={["1"]}
                    inlineCollapsed={isCollapsed.state}
                    style={{height: '100vh'}}
                >
                    <Menu.Item key="1" title="Painel de controle">
                        <Icon type="dashboard" />
                        <span>Painel de controle</span>
                    </Menu.Item>
                    <Menu.Item key="2" title="Wiki">
                        <Icon type="database" />
                        <span>Wiki</span>
                    </Menu.Item>
                    <Button type="link" onClick={() => setIsCollapsed({state: !isCollapsed.state})} >
                        <Icon type={isCollapsed.state ? 'menu-unfold' : 'menu-fold'} />
                        Minimizar
                    </Button>
                </Menu>
            </div>
        </>
    
    )

}
