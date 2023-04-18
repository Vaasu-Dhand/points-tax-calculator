import React from 'react';
import { ReactComponent as ServerError } from '../../public/images/server-error.svg';
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

import { SkeletonLoader } from './SkeletonLoader';
import { useTaxContext } from '../hooks/useTaxContext';
import { getTaxBracketIndex } from '../utils/getTaxBracketIndex';

type Props = {};

export const Tax = (props: Props) => {
  const { isCalculating, data, annualIncome } = useTaxContext();

  const getBorderStyle = (bracketIndex: number) => {
    const userBracketIndex = getTaxBracketIndex(data, annualIncome);

    // If we cannot evaluate user's tax bracket
    if (userBracketIndex === -1) {
      console.log('Could not evaluate tax bracket');
      return '';
    }
    return userBracketIndex === bracketIndex ? '2px solid red' : '';
  };

  // Render Skeleton Loader
  if (isCalculating) {
    return <SkeletonLoader />;
  }

  // Render Error UI
  if (data?.errors) {
    return <ServerError style={{ zoom: '0.4' }} />;
  }

  return (
    <div style={{ minWidth: '500px' }}>
      {data && (
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
                <TableRow key={index} sx={{ border: getBorderStyle(index) }}>
                  <TableCell>{slab.min}</TableCell>
                  <TableCell>{slab?.max ?? '∞'}</TableCell>
                  <TableCell>{slab.rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

interface TaxSlab {
  max: number;
  min: number;
  rate: number;
}
