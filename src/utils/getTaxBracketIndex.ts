interface TaxBracket {
  min: number;
  max?: number | undefined;
  rate: number;
}

interface TaxData {
  tax_brackets: TaxBracket[];
}

export function getTaxBracketIndex(taxData: TaxData, income: number): number {
  console.log(taxData);

  const bracketIndex = taxData.tax_brackets.findIndex((bracket) => {
    return income >= bracket.min && income <= bracket.max;
  });
  return bracketIndex;
}
