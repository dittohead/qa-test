import { CreateMp } from "./mp.model";
import { faker } from '@faker-js/faker'

export const defaultMPCreate: CreateMp = {
  name: faker.word.words(2),
  compId: faker.word.sample(1)
}

