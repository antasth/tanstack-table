import { faker } from '@faker-js/faker'

export const statuses = ['online', 'offline', 'away']

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
  const visits = Math.floor(Math.random() * 100)

  return {
    id: getId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.username(),
    age: randomNumber(18, 65),
    email: faker.internet.email(),
    phone: faker.phone.number(),

    visits,
    status:
      statusChance > 0.75 ? 'online' : statusChance > 0.5 ? 'offline' : 'away',
  }
}

const getFakeData = (length: number) => {
  return range(length).map(() => createUser())
}

export type TUser = ReturnType<typeof createUser>

export { getFakeData }
