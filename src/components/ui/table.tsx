'use client';

import { ColumnProps } from '@/types/table';
import { AvatarIcon, Table as TableComponent } from '@chakra-ui/react';
import { EmptyState } from './empty-state';

const Table = ({ columns, data }: { columns: ColumnProps<any>[]; data: any }) => {
  return (
    <TableComponent.Root size="sm">
      <TableComponent.Header>
        <TableComponent.Row background={'gray.100'} borderBottomWidth="1px">
          {columns.map((col: any, idx: number) => (
            <TableComponent.ColumnHeader key={idx}>{col.name}</TableComponent.ColumnHeader>
          ))}
        </TableComponent.Row>
      </TableComponent.Header>
      <TableComponent.Body>
        {data?.length >= 1 ? (
          data.map((item: any) => (
            <TableComponent.Row key={item.id}>
              {columns.map((col: any, idx: number) => (
                <TableComponent.Cell key={idx}>
                  {col.cell(col.accessor(item) as any)}
                </TableComponent.Cell>
              ))}
            </TableComponent.Row>
          ))
        ) : (
          <TableComponent.Row width="full">
            <TableComponent.Cell colSpan={columns.length}>
              <EmptyState icon={<AvatarIcon />} title="No hay datos disponibles" />
            </TableComponent.Cell>
          </TableComponent.Row>
        )}
      </TableComponent.Body>
    </TableComponent.Root>
  );
};

export default Table;
