/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AddressId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Weight" AS ENUM ('KG10', 'KG25', 'KG50');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Shipped', 'Delivered', 'Cancelled');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "AddressId" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "weight" "Weight" NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "AdressLin1" TEXT NOT NULL,
    "AdressLine2" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_user_id_key" ON "Address"("user_id");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_AddressId_fkey" FOREIGN KEY ("AddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
