-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SaleItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "salesId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0.00,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "SaleItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_salesId_fkey" FOREIGN KEY ("salesId") REFERENCES "Sales" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SaleItem" ("id", "productId", "quantity", "salesId") SELECT "id", "productId", "quantity", "salesId" FROM "SaleItem";
DROP TABLE "SaleItem";
ALTER TABLE "new_SaleItem" RENAME TO "SaleItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
