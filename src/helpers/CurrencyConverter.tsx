import { useCurrency } from "@/hooks/useCurrency";

const CurrencyAmount = ({
  amount,
}: {
  amount: number;
}) => {
  const {
    convertAmount,
    selectedCurrency,
  } = useCurrency();

  const converted = convertAmount(amount);

  return (
    <>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: selectedCurrency,
      }).format(converted)}
    </>
  );
};

export default CurrencyAmount