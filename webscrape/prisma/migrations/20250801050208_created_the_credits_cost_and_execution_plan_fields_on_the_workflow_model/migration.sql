-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkFlow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "executionPlan" TEXT,
    "creditsCost" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL,
    "lastRunAt" DATETIME,
    "lastRunId" TEXT,
    "lastRunStatus" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_WorkFlow" ("createdAt", "definition", "description", "id", "lastRunAt", "lastRunId", "lastRunStatus", "name", "status", "updatedAt", "userId") SELECT "createdAt", "definition", "description", "id", "lastRunAt", "lastRunId", "lastRunStatus", "name", "status", "updatedAt", "userId" FROM "WorkFlow";
DROP TABLE "WorkFlow";
ALTER TABLE "new_WorkFlow" RENAME TO "WorkFlow";
CREATE UNIQUE INDEX "WorkFlow_name_userId_key" ON "WorkFlow"("name", "userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
