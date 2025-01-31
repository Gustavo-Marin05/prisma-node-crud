/*
  Warnings:

  - You are about to drop the column `productId` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `totalAmount` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "SaleItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "salesId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "SaleItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_salesId_fkey" FOREIGN KEY ("salesId") REFERENCES "Sales" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "totalAmount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Sales_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sales" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "Sales";
DROP TABLE "Sales";
ALTER TABLE "new_Sales" RENAME TO "Sales";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
