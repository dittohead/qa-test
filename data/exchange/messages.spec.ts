import { CreateSession } from "./createSession.model";
import { PlaceOrder } from "./placeOrder.model";
import { MpApiKey } from "../api";
import sha256 from "crypto-js/hmac-sha256"

export const prepareSessionData = (mpKeyData: MpApiKey): CreateSession => {
  return {
    apiKey: mpKeyData.apiKey,
    signature: sha256(`"apiKey":"${mpKeyData.apiKey}","timestamp":"${String(Date.now())}"`, mpKeyData.secret).toString(),
    timestamp: Date.now().toString()
  }
}


export const createSession = (d:CreateSession) =>{
  return {
    d: d,
    q: 'exchange.market/createSession',
    sid: 1
  }
}

export const placeOrder = (d:PlaceOrder)=>{
  return {
    "d": d,
    "q": 'v1/exchange.market/placeOrder',
    "sid": 1
  }
}

export const executionReport = (trackingNumber:number)=>{
  return {
    "d": {
      trackingNumber: trackingNumber
    },
    "q": 'v1/exchange.market/executionReports',
    "sid": 103
  }
}

export const trades = (trackingNumber:number)=>{
  return {
    "d": {
      trackingNumber: trackingNumber
    },
    "q": 'v1/exchange.market/executionReports',
    "sid": 104
  }
}
