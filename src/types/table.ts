import { ReactNode } from 'react';

export type ColumnProps<T> = {
  name?: string | ReactNode;
  accessor?: string | ((row: T) => ReactNode | T);
  cell?: (row: T, index?: number) => ReactNode;
};
