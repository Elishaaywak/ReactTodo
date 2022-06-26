import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../types';

interface CounterProps {
  taskCounter: {
    counter: number,
    text: string
  }
}

export default ({ taskCounter: { counter, text } }: CounterProps) => (
  <div className="filters-container">
    <div>
      <span className="active">
        {counter}
      </span>
      {' '}
      <span>{text}</span>
    </div>
    <div className="filters">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All Tasks</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active Tasks</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed Tasks</FilterLink>
    </div>
  </div>
);
