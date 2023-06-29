import { CreateInstrument } from "./instrument.model";
import { faker } from "@faker-js/faker";

export const defaultInstrument = (calId:string): CreateInstrument =>{
  return {
    symbol: faker.word.sample(),
    quoteCurrency: "USD",
    calendarId: calId,
    pricePrecision: "6",
    quantityPrecision: "2",
    minQuantity: "1",
    maxQuantity: "100000",
    activityStatus: "ACTIVE",
    description: "Test Instrument"
  }
}
