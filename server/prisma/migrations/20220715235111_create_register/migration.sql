-- CreateTable
CREATE TABLE "registros" (
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL PRIMARY KEY ,
    "rg"  TEXT UNIQUE NOT NULL ,
    "datanasc" TEXT NOT NULL,
    "nomemae" TEXT NOT NULL,
    "datacadas" TEXT NOT NULL
);
