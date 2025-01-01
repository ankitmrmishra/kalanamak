/*
  Warnings:

  - You are about to drop the column `AdressLin1` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `AdressLine2` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `Address` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isVerified` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "AdressLin1",
DROP COLUMN "AdressLine2",
ADD COLUMN     "Address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
DROP COLUMN "name",
ADD COLUMN     "Firstname" TEXT NOT NULL,
ADD COLUMN     "Lastname" TEXT NOT NULL,
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "forgotPasswordToken" TEXT,
ADD COLUMN     "forgotPasswordTokenExpiry" TIMESTAMP(3),
ADD COLUMN     "isVerified" BOOLEAN NOT NULL,
ADD COLUMN     "role" "role" NOT NULL,
ADD COLUMN     "verifyToken" TEXT,
ADD COLUMN     "verifyTokenExpiry" TIMESTAMP(3),
ALTER COLUMN "mobileNumber" DROP NOT NULL,
ALTER COLUMN "mobileNumber" SET DATA TYPE TEXT;
