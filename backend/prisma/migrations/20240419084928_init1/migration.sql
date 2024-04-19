/*
  Warnings:

  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "employee";

-- CreateTable
CREATE TABLE "emp_data" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "hourly_pay" DOUBLE PRECISION NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "emp_data_pkey" PRIMARY KEY ("id")
);
