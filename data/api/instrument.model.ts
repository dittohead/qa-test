export type CreateInstrument = {
  symbol: string;
  quoteCurrency: string;
  calendarId: string;
  pricePrecision: string;
  quantityPrecision: string;
  minQuantity: string;
  maxQuantity: string;
  activityStatus: string;
  description: string;
}

export type Instrument = {
  id: string;
  symbol: string;
  calendarId: string;
  activityStatus: string;
  tradingStatus: string;
  marketStatus: string;
  minQuantity: string;
  maxQuantity: string;
  pricePrecision: string;
  quantityPrecision: string;
  description: string;
  quoteCurrency: string;
}
