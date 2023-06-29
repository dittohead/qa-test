import { MpApiKeyCreate } from "./mpApiKey.model";
import { faker } from "@faker-js/faker";

export const defaultMpApiKey:MpApiKeyCreate = {
  label:faker.word.sample(1),
  permissions:["market-service:market:order_book_depth",
    "market-service:market:order_book_state",
    "market-service:market:place_order",
    "market-service:market:cancel_order",
    "market-service:market:modify_order",
    "market-service:market:replace_order",
    "market-service:market:mass_cancel",
    "market-service:market:execution_reports",
    "market-service:market:mass_order_status",
    "market-service:market:trades",
    "reporting:mp:orders",
    "reporting:mp:trades"
  ],
  cancelOnDisconnect:false
}
