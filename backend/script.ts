import { prisma } from './lib/prisma'

async function main() {
  // Create a new user with a post
  const user = await prisma.inside_measure.findUnique({
    where: { id: 1 },

  })
  console.log('Created user:', user)
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