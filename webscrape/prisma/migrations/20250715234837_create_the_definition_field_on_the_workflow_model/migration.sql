-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkflowExectution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workflowId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "trigger" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" DATETIME,
    "completedAt" DATETIME,
    "definition" TEXT NOT NULL DEFAULT '{}',
    "creditsConsumed" INTEGER DEFAULT 0,
    CONSTRAINT "WorkflowExectution_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "WorkFlow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WorkflowExectution" ("completedAt", "createdAt", "creditsConsumed", "id", "startedAt", "status", "trigger", "userId", "workflowId") SELECT "completedAt", "createdAt", "creditsConsumed", "id", "startedAt", "status", "trigger", "userId", "workflowId" FROM "WorkflowExectution";
DROP TABLE "WorkflowExectution";
ALTER TABLE "new_WorkflowExectution" RENAME TO "WorkflowExectution";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
