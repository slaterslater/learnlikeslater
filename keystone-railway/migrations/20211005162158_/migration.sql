/*
  Warnings:

  - A unique constraint covering the columns `[card]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User.card_unique" ON "User"("card");
