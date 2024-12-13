/*
  Warnings:

  - You are about to drop the `_UserToorder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `UserId` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UserToorder" DROP CONSTRAINT "_UserToorder_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToorder" DROP CONSTRAINT "_UserToorder_B_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "UserId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_UserToorder";

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
