import { ApiClient, WebsocketClient } from "../api-client";

import { defaultCalendar, defaultInstrument, defaultMpApiKey, defaultMPCreate } from "../data"
import { envs, users } from "../data";
import { createSession, prepareSessionData } from "../data/exchange";

const currentUser = users.qaCandidate
const api = new ApiClient(currentUser, envs.dev.api)
const socket = new WebsocketClient(envs.dev.wss)

describe('test spec', ()=>{
  let cal;
  let mp;
  let mpKey;
  let instrument;

  beforeEach(async()=>{
    cal = await api.createCalendar(defaultCalendar);
    mp = await api.createMp(defaultMPCreate);
    mpKey = await api.createMpApiKey(defaultMpApiKey, mp.id)
    instrument = await api.createInstrument(defaultInstrument(cal.id))

    const gwSession = await socket.sendData(createSession(prepareSessionData(mpKey)))
  })

  it('creating a match between limit GTC and limit GTC', async()=>{
    // remove lint warning
    return null
  })
})
