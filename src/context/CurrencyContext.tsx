"use client";

import { CurrencyCode } from "@/helpers/utils";
import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

type CurrencyContextType = {
  selectedCurrency: CurrencyCode;
  setSelectedCurrency: (currency: CurrencyCode) => void;
  rates: Record<string, number>;
  convertAmount: (amount: number, from?: CurrencyCode) => number;
};

export const CurrencyContext =
  createContext<CurrencyContextType | null>(null);

const supportedCurrencies: CurrencyCode[] = [
  "USD",
  "NGN",
  "EUR",
  "GBP",
];

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyCode>("USD");

  /**
   * Base currency = USD
   */
  const [rates, setRates] = useState<Record<string, number>>({
    USD: 1,
    NGN: 1600,
    EUR: 0.92,
    GBP: 0.79,
  });

  /**
   * Fetch live exchange rates
   */
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          "https://open.er-api.com/v6/latest/USD",
        );

        const data = await res.json();

        if (data?.rates) {
          setRates(data.rates);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRates();
  }, []);

  /**
   * Convert amount
   */
  const convertAmount = useCallback(
    (amount: number, from: CurrencyCode = "USD") => {
      if (!rates[from] || !rates[selectedCurrency]) {
        return amount;
      }

      /**
       * Convert to USD first
       */
      const amountInUSD = amount / rates[from];

      /**
       * Convert to selected currency
       */
      return amountInUSD * rates[selectedCurrency];
    },
    [rates, selectedCurrency],
  );

  /**
   * Persist currency
   */
  useEffect(() => {
    localStorage.setItem("currency", selectedCurrency);
  }, [selectedCurrency]);

  /**
   * Restore currency
   */
  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");

    if (
      savedCurrency &&
      supportedCurrencies.includes(savedCurrency as CurrencyCode)
    ) {
      setSelectedCurrency(savedCurrency as CurrencyCode);
    }
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        rates,
        convertAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};