import React, { useState } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import StrategyCards from '../StrategyCards/index'

export default function ResponsiveGridLayout({issues, cardsData}) {

  const ResponsiveReactGridLayout = WidthProvider(Responsive);
  console.log(ResponsiveReactGridLayout);
  const props = {
    className: "layout",
    rowHeight: 85,
    onLayoutChange: function() {},
    cols: { lg: 6, md: 5, sm: 4, xs: 3 },
    breakpoints: { lg: 1120, md: 930, sm: 740, xs: 550 },
    initialLayout: [{i: '0', x:0, y: 0, w: 2, h: 3, static: true},{i: '1', x:2, y: 0, w: 2, h: 3, static: true},{i: '2', x:0, y: 3, w: 2, h: 3, static: true}]
  };

  const [state, setState] = useState({
    currentBreakpoint: "lg",
    compactType: "vertical",
    mounted: false,
    layouts: { lg: props.initialLayout }
  });

  // function generateLayout() {

  //   return cardsData.map(card => (



  //   )

  //   );

  // }

  function generateDOM() {
    return _.map(state.layouts.lg, function(l, i) {
      return (
        <div key={i} >
          <StrategyCards key={i} data={{ background: '#FFC069', color: '#873800', priority: 4, due_issues: 0 }} />
        </div>
      );
    });
  }

  function onBreakpointChange(breakpoint) { setState({currentBreakpoint: breakpoint}) };

  function onLayoutChange(layout, layouts) {props.onLayoutChange(layout, layouts)};
  
  return (
    <div>
      <ResponsiveReactGridLayout
        {...props}
        margin={[20,20]}
        layouts={state.layouts}
        onBreakpointChange={(breakpoint) => onBreakpointChange(breakpoint)}
        onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
        // WidthProvider option
        measureBeforeMount={true}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        compactType={state.compactType}
        preventCollision={!state.compactType}
      >

        {generateDOM()}

      </ResponsiveReactGridLayout>
    </div>
  );

};
