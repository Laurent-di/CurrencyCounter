import type {
  ConversionParams,
  Currency,
  CurrencyInput,
  ApiResponse,
  ConversionsType,
} from "../types/currency";
import { isValidObject } from "../utils/validation";

import { formatErrorResponse } from "../utils/errors";
import { API_BASE_URL } from "../constants/apiUrls";

const getApiKey = (): string => {
  const apiKey = import.meta.env?.VITE_API_KEY || "";
  if (!apiKey) {
    throw new Error("VITE_API_KEY environment variable is not set");
  }
  return apiKey;
};

const parseCurrency = (item: CurrencyInput): Currency | null => {
  const code = item?.short_code || item?.code || item?.currency_code;
  const name = item?.name || item?.currency_name || item?.full_name;

  if (typeof code !== "string" || typeof name !== "string") {
    return null;
  }

  return { code: code.toUpperCase(), name: name };
};

const parseKeyValues = (
  currenciesData: Record<string, string>
): Currency[] => {
  return Object.entries(currenciesData)
    .filter(([, value]) => typeof value === "string" && value.length > 0)
    .map(([code, value]) => ({
      code: code.toUpperCase(),
      name: value,
    }));
};


export const fetchCurrencies = async (): Promise<Currency[]> => {
  const apiKey = getApiKey();
  const response = await fetch(`${API_BASE_URL}/currencies?api_key=${apiKey}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch currencies: ${response.statusText}. ${errorText}`
    );
  }

  const data: ApiResponse[] = await response.json();

  if (!isValidObject(data)) {
    throw new Error(
      `Invalid API response format. Received: ${formatErrorResponse(data)}`
    );
  }

  const currencyArray = Object.values(data as Record<string, ApiResponse>)
    .map((item) => parseCurrency(item as ApiResponse))
    .filter((currency): currency is Currency => currency !== null);

  if (currencyArray.length > 0) return currencyArray;

  const simpleCurrencies = parseKeyValues(data);

  if (simpleCurrencies.length > 0) return simpleCurrencies;

  throw new Error(
    `No valid currencies response. Received: ${formatErrorResponse(data)}`
  );
};

const extractConversionValue = (data: ConversionsType): number | null => {
  if (typeof data?.value === "number") {
    return data.value;
  }

  return null;
};

export const convertCurrency = async (
  params: ConversionParams
): Promise<number> => {
  const { from, to, amount } = params;

  const apiKey = getApiKey();
  const url = `${API_BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}&api_key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to convert currency: ${response.statusText}. ${errorText}`
    );
  }

  const data: ConversionsType = await response.json();
  const value = extractConversionValue(data);

  if (typeof value !== "number" || isNaN(value)) {
    throw new Error(
      `Invalid conversion response format. Received: ${formatErrorResponse(
        data,
        200
      )}`
    );
  }

  return value;
};
