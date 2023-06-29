type Holidays = {
  date: string;
  closeTime: string;
  name?: string;
}

export type CreateCalendar = {
  tradingDays?: string[];
  name: string;
  timeZone: string;
  marketOpen: string;
  marketClose: string;
  holidays?: Holidays[];
}

export type Calendar = {
  id: string;
  tradingDays?: string[];
  name: string;
  timeZone: string;
  marketOpen: string;
  marketClose: string;
  holidays: Holidays[];
  auctions?: string[];
}

