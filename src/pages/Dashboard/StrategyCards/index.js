import React, { useState } from 'react';
import { Icon } from "antd";

export default function StrategyCards({data}) {

    const [cardData] = useState(data)

    function setMaxWidth(priority) {
    
        switch(priority) {

            case 3:
            return '170px';

            case 4: 
            return '360px';

            case 5: 
            return '550px';

            default:
            return '1120px';

        }

    }

    function setMaxHeight(priority) {
    
        switch(priority) {

            case 3:
            return '170px';

            case 4: 
            return '255px';

            case 5: 
            return '340px';

            default:
            return '1120px';

        }

    }

    function hideNextIssues(priority) {
    
        switch(priority) {

            case 3:
            return 'none';

            case 4: 
            return 'none';

            case 5: 
            return 'block';

            default:
            return 'flex';

        }

    }

    function hideDivider(priority) {
    
        switch(priority) {

            case 3:
            return 'none';

            case 4: 
            return 'none';

            case 5: 
            return 'inline-block';

            default:
            return 'flex';

        }

    }

    function setBackground(priority) {
    
        switch(priority) {

            case 3:
            return '#fff';

            case 4: 
            return '#fff';

            case 5: 
            return cardData.background;

            default:
            return '#000';

        }

    }

    function setColor(priority) {
    
        switch(priority) {

            case 3:
            return cardData.background;

            case 4: 
            return cardData.background;

            case 5: 
            return cardData.color;

            default:
            return '#fff';

        }

    }

    function hideProjectInfo(priority) {
    
        switch(priority) {

            case 3:
            return 'none';

            case 4: 
            return 'flex';

            case 5: 
            return 'flex';

            default:
            return 'block';

        }

    }

    function hideProjectTitle(priority) {
    
        switch(priority) {

            case 3:
            return 'none';

            case 4: 
            return 'inline';

            case 5: 
            return 'inline';

            default:
            return 'block';

        }

    }

    function setColumnSpan(priority) {

        switch(priority) {
          case 5:
            return 'span 3';
          case 4:
            return 'span 2';
          case 3:
            return 'span 1';
          default:
            return 'span 0'
        }
    
      }

    return (
        <div className="project-cards" style={{maxWidth: setMaxWidth(cardData.priority), height: setMaxHeight(cardData.priority), gridColumn: setColumnSpan(cardData.priority), padding: '30px', display: 'flex', background: setBackground(cardData.priority), borderRadius: '30px', color: setColor(cardData.priority)}}>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: hideProjectInfo(cardData.priority), alignItems: 'center'}}>
                        <Icon type="team" style={{marginRight: '15px', fontSize: '24px'}}/>
                        <p>Jussara</p>
                    </div>
                    <div style={{margin: 'auto', display: 'flex'}}>
                        <h1 style={{marginRight: '16px', fontSize: 80, fontWeight: 200}}>E11</h1>
                        <h3 style={{display: hideProjectTitle(cardData.priority), maxWidth: '140px', fontSize: '18px'}}>Desenvolver um programa de estágio para a Edufes</h3>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: hideProjectInfo(cardData.priority), alignItems: 'center'}}>
                            <Icon type="calendar" style={{marginRight: '15px', fontSize: '24px'}}/>
                            <p>02.02.2020</p>
                        </div>
                        <div style={{display: hideProjectInfo(cardData.priority), alignItems: 'center'}}>
                            <Icon type="like" style={{marginRight: '15px', fontSize: '24px'}}/>
                            <p>20%</p>
                        </div>
                    </div>
                </div>
                <div style={{display: hideDivider(cardData.priority), background: '#873800', margin: '0 32px', width: '1px', color:'transparent'}}>a</div>
                <div style={{display: hideNextIssues(cardData.priority), maxWidth: '120px'}}>
                    <div style={{marginBottom: '16px'}}> 
                        <p>Até <strong>02.03.2020</strong></p>
                        <p>Fazer pesquisa em livros e periódicos para entender a importância do estágio</p>
                    </div>
                    <div>
                        <p>Até <strong>02.03.2020</strong></p>
                        <p>Redigir rascunho do programa</p>
                    </div>
                </div>
        </div>
    );
}
