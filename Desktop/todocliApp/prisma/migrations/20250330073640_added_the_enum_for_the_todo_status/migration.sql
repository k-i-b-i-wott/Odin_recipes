/*
  Warnings:

  - Changed the type of `todoStatus` on the `todo_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('Pending', 'InProgress', 'Completed');

-- AlterTable
ALTER TABLE "todo_table" DROP COLUMN "todoStatus",
ADD COLUMN     "todoStatus" "TodoStatus" NOT NULL;
