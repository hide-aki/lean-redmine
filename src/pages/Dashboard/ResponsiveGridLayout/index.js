import React from "react";
import StrategyCards from '../StrategyCards/index'

export default function ResponsiveGridLayout({issues, cardsData}) {

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 170px)', gridGap: '20px', gridAutoFlow: 'dense'}}>
      {cardsData.map((card, i) => <StrategyCards key={card.id} data={{card}} />)}
    </div>
  );

};
