import React, { useState } from 'react';
import { Calendar, Icon } from 'antd';

import StrategyStats from './StrategyStats/index';

export default function Dashboard() {

    return (

        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '100%', maxWidth: '1100px', margin: 'auto', padding: '60px', display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex'}}>
                    <Icon type="dashboard" style={{marginTop: '10px', fontSize: '24px', color: "#FF4D4F", marginRight: '15px'}} />
                    <h1>Painel de controle</h1>
                </div>
                <StrategyStats />
                <h2 style={{margin: '60px 0'}}>Estratégias</h2>
            </div>
            <div style={{width: '400px', height: '100vh', right: 0, borderRadius: '30px 0 0 30px', background: '#fff', alignSelf: 'flex-end'}}>
                <div style={{display: 'flex', margin: '40px'}}>
                    <Icon type="calendar" style={{marginTop: '3px', color: "#FF4D4F", marginRight: '15px'}} />
                    <h3>Minha agenda</h3>
                </div>
                <Calendar fullscreen={false} onPanelChange={"onPanelChange"} style={{margin: '30px'}}/>
                <div style={{display: 'flex', margin: '40px'}}>
                    <Icon type="unordered-list" style={{marginTop: '4px', color: "#FF4D4F", marginRight: '15px'}} />
                    <h3>Minhas próximas tarefas</h3>
                </div>
                <div style={{margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'baseline'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '80px', height: '80px', marginRight: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, background: '#5CDBD3', borderRadius: '30px'}}>
                            <h1 style={{margin: 0, fontSize: '36px', fontWeight: 200, color: '#fff'}}>E6</h1>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{marginBottom: '0.5em', fontWeight: 700, color: '#5CDBD3'}}>06.01.2021</p>
                            <p>Finalizar rascunho do novo regimento</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )

}
