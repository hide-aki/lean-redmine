import React from 'react';
import StrategyCards from './index';

export default {
  title: 'Strategy Cards',
  component: StrategyCards
};

export const highPriority = () => <StrategyCards data={{ background: '#FFC069', color: '#873800', priority: 5, due_issues: 0 }} />;
export const highPriorityWithDueIssues = () => <StrategyCards data={{ background: '#FFC069', color: '#873800', priority: 5, due_issues: 3 }} />;

export const normalPriority = () => <StrategyCards data={{ background: '#FFC069', color: '#873800', priority: 4, due_issues: 0 }} />;
export const normalPriorityWithDueIssues = () => <StrategyCards data={{ background: '#FFC069', color: '#873800', priority: 4, due_issues: 5 }} />;

export const lowPriority = () => <StrategyCards data={{ background: '#FFC069', color: '#873800', priority: 3, due_issues: 0 }} />;
export const lowPriorityWithDueIssues = () => <StrategyCards data={{ background: '#FFC069', color: '#873800', priority: 3, due_issues: 12 }} />;

