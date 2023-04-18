interface TaxBracket {
  min: number;
  max?: number | undefined;
  rate: number;
}

interface TaxData {
  tax_brackets: TaxBracket[];
}

export function getTaxBracketIndex(taxData: TaxData, income: number): number {
  const bracketIndex = taxData.tax_brackets.findIndex((bracket, idx) => {
    return (
      (income >= bracket.min && income <= bracket.max) ||
      (income >= bracket.min && idx === 4)
    );
  });

  return bracketIndex;
}
