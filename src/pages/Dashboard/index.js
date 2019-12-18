import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import api from '../../services/api'
 
import StrategyStats from './StrategyStats/index';
import ResponsiveGridLayout from './ResponsiveGridLayout/index';
import Sidebar from './Sidebar/index';

export default function Dashboard() {

    const [issues, setIssues] = useState([]);        
    const [cardsData, setCardsData] = useState(sessionStorage.getItem("storedCards") ? JSON.parse(sessionStorage.getItem("storedCards")).cards : []);
    const [showingCards, setShowingCards] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {

        async function loadCards() {

            const responseProjects = await api({
              method: 'get',
              url: '/projects.json',

              params: { limit: 100},
              headers: {'X-Redmine-API-Key': localStorage.getItem('redmineApiKey'), "Access-Control-Allow-Headers" : "*", 'Cache-Control': 'max-age<10>'}

            });

            const responseIssues = await api({
              method: 'get',
              url: '/issues.json',

              params: { limit: 100 },
              headers: {'X-Redmine-API-Key': localStorage.getItem('redmineApiKey'), "Access-Control-Allow-Headers" : "*", 'Cache-Control': 'max-age<10>'}

            });

            const projetosEdufes = responseProjects.data.projects.map(project => { try { if (project.parent.id === 254) { return project} else { return null }} catch { return null }}).filter(project => project !== null);
            const tarefasEdufes = responseIssues.data.issues;

            const cards = projetosEdufes.map(function(project){

                project.issues = tarefasEdufes.map(function(issue){
                        if (issue.project.id === project.id) {
                            return issue;
                        } else {
                            return null;
                        }
                    }
                ).filter(issue => issue !== null);
        
                project.due_date = project.issues.map((issue) => { return issue.due_date }).sort().reverse()[0];
                project.membership = project.custom_fields[0].value;

                function setCardPrimaryColor(cardData) {

                    switch (cardData.custom_fields[0].value) {
                        case "Setor administrativo":
                            return '#45651E';
                        case "Fernanda":
                            return '#644E8D';
                        case "Equipe de marketing":
                            return '#435e7f';
                        case "Comissão de capacitação":
                            return '#436C88';
                        case "Setor de design":
                            return '#873800';
                        case "Wilberth":
                            return '#687842';
                        case "Willi":
                            return '#D173B4';
                        case "Adriani e Josias":
                            return '#8A6C6F';
                        case "Jussara":
                            return '#A06348';
                        case "Josias":
                            return '#906663';
                        case "Toda a Edufes":
                            return '#8D4848';
                        default:
                            return '#ffffff'
                    }
            
                }
            
                function setCardSecondaryColor(cardData) {
            
                    switch (cardData.custom_fields[0].value) {
                        case "Setor administrativo":
                            return '#B6C3A1';
                        case "Fernanda":
                            return '#C2A8F2';
                        case "Equipe de marketing":
                            return '#accbeb';
                        case "Comissão de capacitação":
                            return '#7ddee7';
                        case "Setor de design":
                            return 'FFC069';
                        case "Wilberth":
                            return '#C7D672';
                        case "Willi":
                            return '#FFCFEA';
                        case "Adriani e Josias":
                            return '#E3CBCE';
                        case "Jussara":
                            return '#ffaa95';
                        case "Josias":
                            return '#fadac5';
                        case "Toda a Edufes":
                            return '#FF7C7C';
                        default:
                            return 'linear-gradient(151.47deg, #555555 -1.24%, #000000 85.92%)'
                    }
            
                }

                project.primary_color = setCardPrimaryColor(project)
                project.secondary_color = setCardSecondaryColor(project)
        
                return project;


            })

            setCardsData(cards);

            setIssues(() => responseIssues.data.issues.map(function (issue) { 
                
                issue.project.primary_color = cards.map(card => issue.project.id === card.id ? card.primary_color : null).filter(color => color !== null)[0];
                issue.project.secondary_color = cards.map(card => issue.project.id === card.id ? card.secondary_color : null).filter(color => color !== null)[0];

                return issue;

            }));

            sessionStorage.removeItem("storedCards")
        }

        loadCards();

    }, []);

    useEffect(() => {

        if (toggle) {

            const userMemberships = localStorage.getItem("userMemberships").split(",").map(Number);
            let userCardsData = cardsData.map(card => userMemberships.indexOf(card.id) !== -1 ? card : null).filter(card => card !== null);

            setShowingCards(userCardsData);
        
        } else {

            setShowingCards(cardsData);
            
       
        }

    }, [toggle, cardsData])
console.log(cardsData);
console.log(issues);
    return (

        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '100%', maxWidth: '1120px', margin: 'auto', padding: '60px', display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex'}}>
                    <Icon type="dashboard" style={{marginTop: '10px', fontSize: '24px', color: "#FF4D4F", marginRight: '15px'}} />
                    <h1>Painel de controle</h1>
                </div>
                <StrategyStats />
                <h2 style={{margin: '60px 0'}}>Estratégias</h2>
                <ResponsiveGridLayout issues={issues} cardsData={showingCards} />
            </div> 
            <Sidebar issues={issues} cardsData={cardsData} />
        </div>
    
    )

}
