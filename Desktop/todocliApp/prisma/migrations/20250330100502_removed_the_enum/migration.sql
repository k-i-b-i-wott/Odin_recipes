/*
  Warnings:

  - You are about to drop the column `todoTittle` on the `todo_table` table. All the data in the column will be lost.
  - Added the required column `todoTitle` to the `todo_table` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `todoStatus` on the `todo_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "todo_table" DROP COLUMN "todoTittle",
ADD COLUMN     "todoTitle" TEXT NOT NULL,
DROP COLUMN "todoStatus",
ADD COLUMN     "todoStatus" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TodoStatus";
