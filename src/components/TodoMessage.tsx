import React from 'react';
import { VisibilityFilters } from '../types';
import EmptyMessage from './EmptyMessage';
import TodoFilters from './TodoFilters';

interface MessageProps {
  filterState: string,
  getTaskCounter(): {
    counter: number,
    text: string
  }
}

export default ({ filterState, getTaskCounter }: MessageProps) => (
  filterState === VisibilityFilters.SHOW_COMPLETED
    ? (
      <>
        <EmptyMessage message="Congratulations! You do not have any pending task" />
        <TodoFilters taskCounter={getTaskCounter()} />
      </>
    ) : <EmptyMessage message="Add a new task" />
);
