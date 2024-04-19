import express from "express";
import { PrismaClient } from '@prisma/client';
import cors from 'cors'; // Import cors middleware

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(express.json());
app.use(cors()); // Use cors middleware

async function main() {
  try {
    app.post("/", async (req, res) => {
      const { name, hourly_pay } = req.body;
      await prisma.emp_data.create({
        data: {
          name: name,
          hourly_pay: hourly_pay
        }
      });

      const allData = await prisma.emp_data.findMany();
      console.log(allData);
      res.json(allData); // Send the response back to the client
    });
  } catch (error) {
    console.error("Error starting server:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

app.listen(port, () => console.log(`Server connected on port ${port}`));
