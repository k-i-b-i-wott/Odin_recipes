-- CreateTable
CREATE TABLE "todo_table" (
    "id" TEXT NOT NULL,
    "todoTittle" TEXT NOT NULL,
    "todoDescription" TEXT NOT NULL,
    "todoStatus" TEXT NOT NULL,

    CONSTRAINT "todo_table_pkey" PRIMARY KEY ("id")
);
