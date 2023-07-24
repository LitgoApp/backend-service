import { HarmLevel, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

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
      id: userAccount.id,
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
      id: secondUserAccount.id,
      name: 'Dev 2',
      address: '123 Fake St',
    },
  })

  const thirdUserAccount = await prisma.userAccount.create({
    data: {
      email: 'user@litgo.com',
      password: hashedPassword,
    },
  })
  const thirdUser = await prisma.user.create({
    data: {
      id: thirdUserAccount.id,
      name: 'Litgo User',
      address: '200 University Avenue West',
      points: 532,
    },
  })

  const municipalityAccount = await prisma.municipalityAccount.create({
    data: {
      email: 'waterloo@litgo.com',
      password: hashedPassword,
    },
  })
  const municipality = await prisma.municipality.create({
    data: {
      id: municipalityAccount.id,
      name: 'City of Waterloo',
      phoneNumber: '1234567890',
    },
  })
  const createRegion = prisma.region.create({
    data: {
      points: {
        create: campus,
      },
      municipalityId: municipality.id,
    },
  })
  const createDispostalSites = prisma.disposalSite.createMany({
    data: garbageCans.map((point) => ({
      municipalityId: municipality.id,
      ...point,
    })),
  })

  const image1 = Buffer.from(fs.readFileSync('./prisma/seed_images/1.jpg'))
  const image2 = Buffer.from(fs.readFileSync('./prisma/seed_images/2.jpg'))
  const image3 = Buffer.from(fs.readFileSync('./prisma/seed_images/3.jpg'))
  const image4 = Buffer.from(fs.readFileSync('./prisma/seed_images/4.jpg'))

  const createLitterSite = prisma.litterSite.create({
    data: {
      latitude: 43.47226571727006,
      longitude: -80.54820994389371,
      image: image1,
      reporterUserId: thirdUser.id,
      description:
        'Dumped litter in a section of grass. Be careful, as there is broken glass and a compressed air canister!',
      harm: HarmLevel.HAZARDOUS,
      litterCount: 21,
    },
  })
  const createClaimedLitterSite = prisma.litterSite.create({
    data: {
      latitude: 43.469813292571246,
      longitude: -80.54163663363836,
      image: image2,
      reporterUserId: thirdUser.id,
      description: 'Mask alongside the path.',
      collectorUserId: user.id,
      isCollected: true,
      litterCount: 1,
    },
  })
  const createSelfReportedLitterSite = prisma.litterSite.create({
    data: {
      latitude: 43.475881056263525,
      longitude: -80.54256047683482,
      image: image3,
      reporterUserId: thirdUser.id,
      description: "Some bottles floating in the water, don't fall in!",
      collectorUserId: thirdUser.id,
      isCollected: true,
      harm: HarmLevel.CAUTION,
      litterCount: 7,
    },
  })
  const createClaimedLitterSite2 = prisma.litterSite.create({
    data: {
      latitude: 43.47247991582963,
      longitude: -80.54931948277049,
      image: image4,
      reporterUserId: secondUser.id,
      description: 'A soda bottle on the side of the road.',
      collectorUserId: thirdUser.id,
      isCollected: true,
      litterCount: 1,
    },
  })

  const createReward = prisma.reward.create({
    data: {
      name: '$10 Starbucks Gift Card',
      description: 'Code: 6068 5242 2596 9859',
      cost: 100,
    },
  })

  const createSecondReward = prisma.reward.create({
    data: {
      name: '$5 Amazon Gift Card',
      description: 'Code: 4895 4860 1238 5031',
      cost: 50,
    },
  })

  const thirdReward = await prisma.reward.create({
    data: {
      name: '$20 Tim Hortons Gift Card',
      description: 'Code: 5913 3295 1293 9141',
      cost: 200,
    },
  })

  const createClaimedReward = prisma.rewardTransaction.create({
    data: {
      userId: thirdUser.id,
      rewardId: thirdReward.id,
      rewardCost: thirdReward.cost,
    },
  })
  const pointChange = prisma.pointChange.createMany({
    data: [
      {
        userId: thirdUser.id,
        amount: 21,
      },
      {
        userId: thirdUser.id,
        amount: 1,
      },
      {
        userId: thirdUser.id,
        amount: 7,
      },
      {
        userId: thirdUser.id,
        amount: 35,
      },
      {
        userId: thirdUser.id,
        amount: 3,
      },
      {
        userId: thirdUser.id,
        amount: -thirdReward.cost,
      },
    ],
  })

  await prisma.$transaction([
    createRegion,
    createDispostalSites,
    createLitterSite,
    createClaimedLitterSite,
    createSelfReportedLitterSite,
    createClaimedLitterSite2,
    createReward,
    createSecondReward,
    createClaimedReward,
    pointChange,
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
