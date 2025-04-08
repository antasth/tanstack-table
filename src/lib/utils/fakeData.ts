import { faker } from '@faker-js/faker'
import { MAX_AGE, MIN_AGE } from '../constants'

export const statuses = [
  {
    id: 1,
    name: 'online',
    color: 'status.online',
  },
  {
    id: 2,
    name: 'offline',
    color: 'status.offline',
  },
  {
    id: 3,
    name: 'away',
    color: 'status.away',
  },
]

const range = (length: number) => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(i)
  }
  return arr
}

let id = 1
const getId = () => id++

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const createUser = () => {
  const statusChance = Math.random()
  const date = faker.date.past()
  date.setHours(0, 0, 0, 0)

  return {
    id: getId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.username(),
    age: randomNumber(MIN_AGE, MAX_AGE),
    email: faker.internet.email(),
    createdAt: date,

    status:
      statusChance > 0.75 ? 'online' : statusChance > 0.5 ? 'offline' : 'away',
  }
}

const getFakeData = (length: number) => {
  return range(length).map(() => createUser())
}

export type TUser = ReturnType<typeof createUser>

export { getFakeData }
