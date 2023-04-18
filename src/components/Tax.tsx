import React from 'react';
import { useTaxContext } from '../hooks/useTaxContext';
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

type Props = {};

export const Tax = (props: Props) => {
  const { isCalculating, data } = useTaxContext();

  // Render Skeleton Loader
  if (isCalculating) {
  }

  // Render Error UI
  if (data?.errors) {
  }

  console.log({ data });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Min Income</TableCell>
            <TableCell>Max Income</TableCell>
            <TableCell>Tax Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.tax_brackets.map((slab: TaxSlab, index: number) => (
            // Ideally index should not be assigned as a key. Because if the arraw were to update, React can mess up the order.
            // However, it is fine in this case, as the UI is read only and does not update the database.
            <TableRow key={index}>
              <TableCell>{slab?.max ?? '∞'}</TableCell>
              <TableCell>{slab.min}</TableCell>
              <TableCell>{slab.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface TaxSlab {
  max: number;
  min: number;
  rate: number;
}
