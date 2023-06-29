import { CreateCalendar } from "./calendar.model";
import { faker } from "@faker-js/faker";

export const defaultCalendar: CreateCalendar = {
  name: faker.word.sample(),
  timeZone: "+01:00",
  marketOpen: "08:00",
  marketClose: "16:30",
  tradingDays: [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ],
}
