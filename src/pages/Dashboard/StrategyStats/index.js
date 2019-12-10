import React, { useState } from 'react';
import { Icon, Progress } from 'antd';

export default function StrategyStats() {



    return (

    <div style={{position: 'relative', width: '100%', height: '275px', padding: '30px', display: 'flex', justifyContent: 'space-between', background: 'linear-gradient(180deg, #52C41A 0%, #389E0D 100%)', borderRadius: '30px', color: '#fff', zIndex: '-2'}}>
        <Icon type="check" style={{fontSize: '372px', color: '#52C41A', position: 'absolute', top: 0, left: '50%', bottom: 0, borderRadius: '30px', zIndex: '-1', overflow: 'hidden'}} />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <h1 style={{fontWeight: 200, lineHeight: '1em', color: 'inherit'}}>Plano estratégico 2020-2021</h1>
            <div style={{height: 'auto', marginTop: 'auto', display: 'flex'}}>
                <div style={{marginRight: 'auto', display: 'flex', alignItems: 'center'}}>
                    <h1 style={{margin: '0 15px 0 0', fontSize: '56px', lineHeight: '0.9em', fontWeight: 200, color: 'inherit'}}>32%</h1>
                    <h4 style={{margin: 0, color: 'inherit'}}>do plano<br />concluídos</h4>
                </div>
                <div style={{margin: 0, display: 'flex', alignSelf: 'flex-end', alignItems: 'center'}}>
                    <h1 style={{margin: '0 15px 0 0', fontSize: '56px', fontWeight: 200, lineHeight: '0.9em', color: 'inherit'}}>0</h1>
                    <h4 style={{margin: 0, color: 'inherit'}}>tarefas<br />em atraso</h4>
                </div>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{marginTop: 'auto'}}>
                <p style={{margin: 0}}>O trimestre acaba em</p>
                <h2 style={{margin: 0, color: '#fff'}}>2 meses e 3 dias</h2>
                <Progress percent={30} style={{marginBottom: '20px'}}/>
            </div>
            <div>
                <p style={{margin: 0}}>O plano deve ser concluído em até</p>
                <h2 style={{margin: 0, color: '#fff'}}>1 ano, 10 meses e 3 dias</h2>
                <Progress percent={30} style={{color: '#fff'}}/>
            </div>
        </div>
    </div>

    );
}
