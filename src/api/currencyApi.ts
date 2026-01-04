import type {
  Currency,
  ConversionParams,
  UnknownApiResponse,
  CurrencyItemInput,
} from "../types/currency";
import { isValidObject, validateConversionParams } from "../utils/validation";
import { isValidCurrencyCode } from "../utils/currency";
import { formatErrorResponse } from "../utils/errors";

const API_BASE_URL = "https://api.currencybeacon.com/v1";

const getApiKey = (): string => {
  const apiKey = import.meta.env?.VITE_API_KEY || "";
  if (!apiKey) {
    throw new Error("VITE_API_KEY environment variable is not set");
  }
  return apiKey;
};

const extractCurrenciesData = (data: UnknownApiResponse): Record<string, unknown> | null => {
  const possiblePaths = [
    isValidObject(data) && 'response' in data && isValidObject(data.response) && 'currencies' in data.response ? data.response.currencies : null,
    isValidObject(data) && 'response' in data ? data.response : null,
    isValidObject(data) && 'currencies' in data ? data.currencies : null,
    isValidObject(data) ? data : null,
  ];

  return possiblePaths.find((path): path is Record<string, unknown> => isValidObject(path)) ?? null;
};


const parseCurrencyItem = (item: unknown): Currency | null => {
  if (!isValidObject(item)) return null;

  const currencyItem = item as CurrencyItemInput;
  const code = currencyItem.short_code || currencyItem.code || currencyItem.currency_code;
  const name = currencyItem.name || currencyItem.currency_name || currencyItem.full_name;

  if (typeof code !== "string" || typeof name !== "string") return null;

  const currencyCode = code.trim().toUpperCase();
  const currencyName = name.trim();

  if (!isValidCurrencyCode(currencyCode) || !currencyName.length) return null;

  return { code: currencyCode, name: currencyName };
};

const parseSimpleKeyValue = (
  currenciesData: Record<string, unknown>
): Currency[] => {
  return Object.entries(currenciesData)
    .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
    .map(([code, value]) => ({
      code: code.trim().toUpperCase(),
      name: String(value).trim(),
    }))
    .filter(({ code }) => isValidCurrencyCode(code));
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

  const data: unknown = await response.json();
  const currenciesData = extractCurrenciesData(data);

  if (!isValidObject(currenciesData)) {
    throw new Error(
      `Invalid API response format. Received: ${formatErrorResponse(data)}`
    );
  }

  const currencyArray = Object.values(currenciesData)
    .map(parseCurrencyItem)
    .filter((currency): currency is Currency => currency !== null);

  if (currencyArray.length > 0) return currencyArray;

  const simpleCurrencies = parseSimpleKeyValue(currenciesData);

  if (simpleCurrencies.length > 0) return simpleCurrencies;

  throw new Error(
    `No valid currencies response. Received: ${formatErrorResponse(data)}`
  );
};

const extractConversionValue = (data: unknown): number | null => {
  if (typeof data === "number") {
    return data;
  }

  if (!isValidObject(data)) {
    return null;
  }

  if ('response' in data && isValidObject(data.response) && 'value' in data.response) {
    const responseValue = data.response.value;
    if (typeof responseValue === "number") {
      return responseValue;
    }
  }

  if ('value' in data && typeof data.value === "number") {
    return data.value;
  }

  return null;
};

export const convertCurrency = async (
  params: ConversionParams
): Promise<number> => {
  const { from, to, amount } = params;

  if (!validateConversionParams(from, to, amount)) {
    throw new Error("Invalid conversion parameters");
  }

  const apiKey = getApiKey();
  const url = `${API_BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}&api_key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to convert currency: ${response.statusText}. ${errorText}`
    );
  }

  const data: unknown = await response.json();
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
