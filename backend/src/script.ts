import { prisma } from './lib/prisma.js'
import { serve } from '@hono/node-server';
import { app } from './app.js';

async function main() {

}

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
})

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })