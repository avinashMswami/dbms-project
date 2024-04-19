-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "hourly_pay" DOUBLE PRECISION NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
