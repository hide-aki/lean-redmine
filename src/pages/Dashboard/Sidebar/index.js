import React, { useState, useEffect } from 'react';
import { Calendar, Icon } from 'antd';

export default function Sidebar({issues, cardsData}) {

    const [nextIssues, setNextIssues] = useState([]);

    useEffect(() => {

        setNextIssues(

            issues.sort((a,b) => new Date(a.due_date) > new Date(b.due_date) ? a : b).slice(-3).reverse()

        );

    }, [issues]);

    return (            
    
        <div style={{width: '400px', height: '100vh', top: 0, right: 0, position: 'sticky', borderRadius: '30px 0 0 30px', background: '#fff', alignSelf: 'flex-end'}}>
            <div style={{display: 'flex', margin: '40px'}}>
                <Icon type="calendar" style={{color: "#FF4D4F", marginRight: '15px', fontSize: '20px'}} />
                <h3>Minha agenda</h3>
            </div>
            <Calendar fullscreen={false} onPanelChange={"onPanelChange"} style={{margin: '30px'}}/>
            <div style={{display: 'flex', margin: '40px'}}>
                <Icon type="unordered-list" style={{color: "#FF4D4F", marginRight: '15px', fontSize: '20px'}} />
                <h3>Minhas próximas tarefas</h3>
            </div>
            <div style={{margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'baseline'}}>

                {nextIssues.map(issue => (

                <div key={issue.id} style={{display: 'flex'}}>
                    <div style={{width: '80px', height: '80px', marginRight: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, background: issue.project.secondary_color, borderRadius: '30px'}}>
                <h1 style={{margin: 0, fontSize: '36px', fontWeight: 200, color: '#fff'}}>{issue.project.name.split(' ')[0].slice(0, -1)}</h1>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={{marginBottom: '0.5em', fontWeight: 700, color: issue.project.secondary_color}}>{new Date(issue.due_date).toLocaleDateString().replace(/\//g,'.')}</p>
                        <p>{issue.subject}</p>
                    </div>
                </div>

                ))}

            </div>
        </div>
    )

}