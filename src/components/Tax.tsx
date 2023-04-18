import React, { useState, useEffect } from 'react';
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

export const Tax = () => {
  const [bracketIdx, setBracketIdx] = useState<number | undefined>();
  const { isCalculating, data, annualIncome } = useTaxContext();

  // Run's after data is fetched & deduces user's tax bracket
  useEffect(() => {
    if (data?.hasOwnProperty('tax_brackets')) {
      const userBracketIndex = getTaxBracketIndex(data, annualIncome);

      // If we cannot evaluate user's tax bracket
      if (userBracketIndex === -1) {
        console.error('Could not evaluate tax bracket');
        return '';
      }

      setBracketIdx(userBracketIndex);
    }
  }, [data]);

  // Render Skeleton Loader
  if (isCalculating) {
    return <SkeletonLoader />;
  }

  // Render Error UI
  if (data?.errors) {
    return <ServerError style={{ zoom: '0.4' }} />;
  }

  const taxAmount = annualIncome * data?.tax_brackets[bracketIdx]?.rate;

  return (
    <div style={{ minWidth: '500px' }}>
      {data && (
        <>
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
                  <TableRow
                    key={index}
                    sx={{
                      border: bracketIdx === index ? '2px solid skyblue' : '',
                    }}
                  >
                    <TableCell>${slab.min}</TableCell>
                    <TableCell>${slab?.max ?? '∞'}</TableCell>
                    <TableCell>{slab.rate}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* TODO: Handle NaN error here */}
          <h6>Your Tax would be: ${taxAmount.toFixed(2)}</h6>
        </>
      )}
    </div>
  );
};

interface TaxSlab {
  max: number;
  min: number;
  rate: number;
}
