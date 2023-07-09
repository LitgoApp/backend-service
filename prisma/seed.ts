import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

const baseLitterImage =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+L+U4T8ABu8CpCYJ1DQAAAAASUVORK5CYII='

const campus = [
  {
    latitude: 43.47685549132883,
    longitude: -80.54005335198421,
  },
  {
    latitude: 43.472113789766254,
    longitude: -80.5364696146485,
  },
  {
    latitude: 43.47114693692296,
    longitude: -80.53813164435095,
  },
  {
    latitude: 43.46441672016253,
    longitude: -80.54154616643147,
  },
  {
    latitude: 43.46923763567396,
    longitude: -80.54958801898178,
  },
  {
    latitude: 43.4691428460972,
    longitude: -80.55406608072674,
  },
  {
    latitude: 43.47048342772424,
    longitude: -80.55764853012269,
  },
]

const garbageCans = [
  {
    latitude: 43.47153962260935,
    longitude: -80.54606154535763,
  },
  {
    latitude: 43.46948137961735,
    longitude: -80.5430201950892,
  },
]

async function main() {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash('password', salt)

  const userAccount = await prisma.userAccount.create({
    data: {
      email: 'dev.user@litgo.com',
      password: hashedPassword,
    },
  })
  const user = await prisma.user.create({
    data: {
        userId: userAccount.id,
        name: 'Dev',
        address: '123 Fake St',
    },
  })

  const secondUserAccount = await prisma.userAccount.create({
    data: {
        email: 'dev.user2@litgo.com',
        password: hashedPassword,
    },
  })
  const secondUser = await prisma.user.create({
    data: {
        userId: secondUserAccount.id,
        name: 'Dev 2',
        address: '123 Fake St',
    },
  })

  const municipalityAccount = await prisma.municipalityAccount.create({
    data: {
      email: 'dev.municipality@litgo.com',
      password: hashedPassword,
    },
  })
  const municipality = await prisma.municipality.create({
    data: {
        municipalityId: municipalityAccount.id,
        name: 'Dev',
        phoneNumber: '1234567890',
    },
  })
  const createRegion = prisma.region.create({
    data: {
      points: {
        create: campus,
      },
      municipalityId: municipality.municipalityId,
    },
  })
  const createDispostalSites = prisma.disposalSite.createMany({
    data: garbageCans.map((point) => ({
      municipalityId: municipality.municipalityId,
      ...point,
    })),
  })
  const createLitterSite = prisma.litterSite.create({
    data: {
      latitude: 43.468682437466896,
      longitude: -80.54462483388113,
      image: Buffer.from(baseLitterImage, 'base64'),
      reporterUserId: user.userId,
      description: 'This is a test litter site.',
      litterCount: 1,
    },
  })
  const createClaimedLitterSite = prisma.litterSite.create({
    data: {
      latitude: 43.468682437466896,
      longitude: -80.54462483388113,
      image: Buffer.from(baseLitterImage, 'base64'),
      reporterUserId: user.userId,
      description: 'This is a test litter site.',
      litterCount: 1,
      isCollected: true,
      collectorUserId: secondUser.userId,
    },
  })
  const createReward = prisma.reward.create({
    data: {
      name: 'Test Reward',
      description: 'This is a test reward.',
      cost: 100,
    },
  })
  await prisma.$transaction([
    createRegion,
    createDispostalSites,
    createLitterSite,
    createClaimedLitterSite,
    createReward,
  ])
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
